export const timerInstace = {
  typingDelay: 1500,
  firstLoadingDelay: 3000,
  chatBoxLottieHideDelay: 1000,
  typingSpeed: 50,
};
export const chatBoxResumeList = [
  {
    showAnimationWithCss: true,
    text: "您好!我叫郭贤哲。",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: true,
    text: "我是一名Web前端工程师·项目经理",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: true,
    text: "Email:guo90962@gmail.com",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: true,
    text: "毕业于太原理工大学(2011-2015) 软件工程专业",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: true,
    text: "请给我点时间,让我介绍一下自己,谢谢!",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: true,
    text: "首先是我个人的一些概况:",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: false,
    text: `• 拥有丰富的web开发,app开发,Electron开发等跨端开发经验,有诸多海内外应用实战经验。
• 有丰富的开源项目开发经验,对项目的CICD,自动化测试,自动化部署有很多经验。
• 有丰富的移动端和PC端应用程序架构经验,带领团队开发过即时通讯,IM等多样化产品。
• 掌握前端MVVM框架如React,Vue.js,Angular。
• 对HTML、CSS有深刻地理解,掌握原生JS的编写且有面向对象编程的经验。
• 喜欢钻研自动化,对前端工程化,前后端性能优化有一定经验与见解。
• 掌握前端常用的构建工具如Webpack,Gulp。
• 熟悉后端语言如PHP,Node.js等。
• 有多年的scrum master管理经验,熟悉scrum开发模式,有许多Jira,Tapd等敏捷开发工具的管理经验。
• 具有一定的学习能力、沟通能力和团队合作意识。`,
    chatBoxLottieHideDelay: 1000,
  },
  {
    showAnimationWithCss: true,
    text: "下面是我的一些工作经历:",
    chatBoxLottieHideDelay: 500,
  },
  {
    showAnimationWithCss: false,
    text: `2023.04 - 至今 声网
  跨平台工程师

  • electron sdk

      基于公司的音视频c++ sdk封装到electron框架,此为开源项目。解决客户在electron上遇到的各种问题(包括electron本身的常见业务问题以及音视频相关问题)
      使用electron 自带的视频编解码能力,提高整个electron sdk自渲染链路上的性能体验(包括帧率,内存,GPU等性能优化)。
      了解熟悉chromium以及整个electron的构建流程,并在此基础上进行二次开发。

  • react native sdk

      基于公司的音视频c++ sdk封装到react-native框架,此为开源项目。解决客户在RN上遇到的各种问题(包括RN本身的常见业务问题以及音视频相关问题)
      使用NativeModules封装iOS和Android的一些原生功能,并在RN层进行调用。(如画中画,UIView的渲染等)。

  • flutter web sdk

      基于公司的音视频web sdk封装到flutter web框架,此为开源项目。对flutter官方的web生态比较熟悉。解决客户在flutter上遇到的各种问题(包括flutter本身的常见业务问题以及音视频相关问题)
      对flutter web的性能优化有一定的经验。

  • react sdk

      基于公司的web sdk封装到react框架,此为开源项目。解决客户在react上遇到的各种问题(包括react本身的常见业务问题以及音视频相关问题)
      对react有足够的了解,常用的生命周期,状态管理,组件化等都有一定的经验。`,
    chatBoxLottieHideDelay: 1000,
  },
  {
    showAnimationWithCss: false,
    text: `2019.09 - 2023.04 株式会社POPER
  前端架构师 项目经理

  • 3个APP产品线的架构与开发

      根据公司PC端业务与日本线下补习班的模式,分析其中的特点和问题,并结合移动设备的特性,分别设计出教务管理、在线音视频通话与多模式打卡出勤APP来帮助公司实现移动端产品线的布局。
      这其中包括了项目的初始化、业务分析、开发、联调测试、上线等各环节。主导选型不同的架构方案,与前端同学一起完成诸多移动端场景的业务变现。

      使用到的技术: Vue2, React Native, Jenkins自动化分发等。

  • 在线音视频通话WebApp

      基于Agora与Amazon Chime提供,完成在线音视频通话WebApp。
      其中承担了初期开发的全部工作,并根据不同的WebRTC供应商接口使用规则,设计出可让业务层统一接入的SDK。
      该SDK可在不改变业务层时进行供应商切换来实现降低公司成本的效果。

      使用到的技术: React, Flutter等。

  • IM桌面应用

      基于SendBird与Electron, 完成IM桌面应用产品。包括设计整个产品所有的业务细节, 架构开发方案以及参与项目的部分模块开发。
      该业务解决了公司产品线没有即时通讯的短板,降低CS部门与用户的沟通成本。

      使用到的技术: React, Electron等。`,
    chatBoxLottieHideDelay: 1000,
  },
  {
    showAnimationWithCss: false,
    text: `2017.07 - 2019.01 北京锐界科技
  Web前端工程师

  • 机器人管理ERP系统

      负责公司ERP系统的架构与全站开发。该系统含大量的图形处理,通过使用d3.js与Echarts来实现业务的要求。针对svg绘制与canvas绘制渲染做了很多优化来提高体验。
      同时针对系统数据量庞大,页面dom渲染过多问题做了性能上的优化。
      由于是SAP项目,设计了一套完整的项目懒加载来提高项目的访问速度,这其中包括组件库的设计,页面模块化等重构。

      使用到的技术: Angular2, FIS, d3.js, Echarts等。`,
    chatBoxLottieHideDelay: 1000,
  },
  {
    showAnimationWithCss: false,
    text: `2014.09 - 2017.07 同程旅行
  Web前端工程师

  • Hybrid混合WebApp研发

      负责公司APP端Hybrid混合项目的开发工作,并基于zepto与ant-design实现出一套代替Native组件的UI库,将m站跟Hybrid项目的代码进行统一。
      发布时通过webpack相关配置来进行区分式打包,大大降低了开发的人力,提高了业务的开发效率。

      使用到的技术: Angular1, Webpack, React等。

  • 活动专题H5开发

      基于Zepto,artTemplate来实现业务的一些H5活动页面,解决了诸多移动端的疑难杂症如输入框遮挡问题,首屏渲染效率优化,不同手机设备(include WP)的UI适配等。

      使用到的技术: Zepto,artTemplate, gulp, grunt等。`,
    chatBoxLottieHideDelay: 1000,
  },
  {
    showAnimationWithCss: true,
    text: "谢谢。",
    chatBoxLottieHideDelay: 1000,
  },
];
