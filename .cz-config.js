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

  messages: {
    type: "请选择您要提交的更改类型：",
    customScope: "提交内容的影响范围（可选）",
    subject: "提交内容的简短描述",
    body: "提交内容的详细描述，使用“|” 换行\n",
    breaking: "列出可能存在的突发变化（可选）：\ n",
    footer: "列出此更改所关闭的任何问题（可选）",
    confirmCommit: "您确定要继续上面的提交吗？"
  },

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};