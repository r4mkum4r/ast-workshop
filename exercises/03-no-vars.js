// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const callExps = root.find(j.VariableDeclaration);


  callExps.remove();

  return root.toSource();
}