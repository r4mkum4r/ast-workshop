export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const fn = j.functionDeclaration(
    j.identifier("newFn"),
    [j.identifier("x")],
    j.blockStatement([
      j.returnStatement(
        j.binaryExpression(
          "+",
          j.identifier("x"),
          j.literal(1)
        )
      )
    ])
  );

  root.find(j.FunctionDeclaration).forEach(f => {
    const isPresent = f.parentPath.value.filter(
      v => {
        return v.id.name === "newFn";
      }
    );

    if (isPresent.length) {
      return;
    }

    f.parentPath.unshift(fn);
  });

  return root.toSource();
}