const css = (templateStr: TemplateStringsArray, ...values: string[]): string => {
	return templateStr.reduce((result, str, i): string => `${result}${str}${values[i] || ''}`, '');
};
export { css };
