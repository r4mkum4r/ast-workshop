export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  return root.toSource();
}