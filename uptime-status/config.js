// 配置
window.Config = {

  // 站点名
  SiteName: 'Aloys233 Status',

  // 站点链接
  SiteUrl: 'https://aloys233.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm788002219-1e4c2de9fc1634853205e3fa',
    'm788010954-40421832870e4108aa079286',
    'm787982172-fe3fd1a7662cf995970dc2b1',
    'm788002221-6f438bd90e36249212b31fec',
    'm788761677-bdd03daf85704730731e0e39',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://blog.aloys233.top'
    }
  ]
};
