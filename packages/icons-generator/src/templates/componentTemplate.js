function componentTemplate({ template }, opts, { componentName, exports, imports, jsx, props }) {
  const code = `
    import { IconWrapper,IconProps } from '../IconWrapper';

    %%NEWLINE%%

    const %%COMPONENT_NAME%% = (allProps: IconProps) => {
      const { svgProps: props, ...restProps } = allProps;
      return <IconWrapper icon={%%JSX%%} {...restProps} />
    };

    %%EXPORTS%%
  `

  const mapping = {
    COMPONENT_NAME: componentName,
    EXPORTS: exports,
    JSX: jsx,
    NEWLINE: '\n',
  }

  /**
   * API Docs: https://babeljs.io/docs/en/babel-template#api
   */
  const typeScriptTpl = template(code, {
    plugins: ['jsx', 'typescript'],
    preserveComments: true,
    syntacticPlaceholders: true,
  })

  return typeScriptTpl(mapping)
}

module.exports = componentTemplate
