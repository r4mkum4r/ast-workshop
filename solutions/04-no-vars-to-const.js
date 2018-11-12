// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const callExps = root.find(j.VariableDeclaration);

  callExps.forEach(exp => {
    if (exp.value.kind === "var") {
      exp.value.declarations.forEach(dec => {
        let varDec = 'let';
        let varValue = null;

        if (dec.init && dec.init.value) {
          varDec = 'const';
          varValue = j.literal(dec.init.value);
        }
        const newVar = j.variableDeclaration(varDec, [
          j.variableDeclarator(
            j.identifier(dec.id.name),
            varValue
          )
        ]);

        exp.parentPath.unshift(newVar);
      });
    }
  });

  callExps.remove();

  return root.toSource();
}