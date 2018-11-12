// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const callExps = root.find(j.VariableDeclaration);

  callExps.forEach(exp => {
    if (exp.value.kind === "var") {
      exp.value.declarations.forEach(dec => {
        const newVar = j.variableDeclaration("let", [
          j.variableDeclarator(
            j.identifier(dec.id.name),
            j.literal(
              dec.init ? dec.init.value : null
            )
          )
        ]);

        exp.parentPath.unshift(newVar);
      });
    }
  });

  callExps.remove();

  return root.toSource();
}