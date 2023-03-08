// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['test', 'config', 'learn']],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?:( |)(.*)$/, // my custom header pattern
      // headerCorrespondence: ['type', 'scope', 'subject'],
      // revertPattern:
      //   /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
      // revertCorrespondence: ['header', 'hash'],
    },
  },
};
