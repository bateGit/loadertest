module.exports = {

  types: [
    {
      value: 'WIP',
      name : '💪  WIP:      正在进行中'
    },
    {
      value: 'feat',
      name : '✨  feat:     一个新功能'
    },
    {
      value: 'fix',
      name : '🐞  fix:      一个bug修复'
    },
    {
      value: 'perf',
      name: '🚀  perf:     性能优化'
    },
    {
      value: 'refactor',
      name : '🛠   refactor: 重构，代码更改理论不修复bug，不添加新功能'
    },
    {
      value: 'docs',
      name : '📚  docs:     更新文档'
    },
    {
      value: 'test',
      name : '🏁  test:     添加或修改测试'
    },
    {
      value: 'chore',
      name : '🗯   chore:    其它功能之外的繁琐之事'
    },
    {
      value: 'style',
      name : '💅  style:    代码风格调整，格式化代码，不影响原有功能'
    },
    {
      value: 'revert',
      name : '⏪  revert:   还原回滚代码'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};