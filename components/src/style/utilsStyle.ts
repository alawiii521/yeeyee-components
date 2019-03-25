const css = (
  templateStr: TemplateStringsArray,
  ...values: string[]
): string => {
  return templateStr.reduce(
    (result, str, i) => `${result}${str}${values[i] || ''}`,
    ''
  );
};
export { css };
