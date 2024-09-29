export const RESUME: ResumeConfig = {
  avatar: {
    src: "https://avatars.githubusercontent.com/u/53285945?v=4",
  },
  profile: {
    name: "郭贤哲",
    email: "guo90962@gmail.com",
    mobile: "18515598524",
    github: "https://github.com/guoxianzhe",
    workExpYear: "工作经验: 10年",
    workPlace: "",
    positionTitle: "职位:前端工程师",
  },
  educationList: [
    {
      edu_time: ["2011.09", "2015.06"],
      school: "太原理工大学",
      major: "软件工程",
      academic_degree: "本科",
    },
    {
      edu_time: ["2019.03", "2019.09"],
      school: "電気通信大学",
      major: "自然语言处理",
      academic_degree: "肄业",
    },
  ],
  awardList: [
    { award_info: "日语 N1", award_time: "2020.12" },
    { award_info: "英语 托业810", award_time: "2018.11" },
    {
      award_info: "第七届苏州工业园区高技能HTML三等奖",
      award_time: "2016.06",
    },
    {
      award_info: "APP+M站代码合一框架 二等创新奖",
      award_time: "2017.03",
    },
  ],
  workExpList: [
    {
      company_name: "声网",
      department_name: "跨平台工程师",
      work_time: ["2023.04", "至今"],
      work_desc: [
        "1.负责公司的多个跨平台项目,包括Electron SDK,React Native SDK,Flutter SDK,React SDK。",
        "2.所有项目均为开源项目,日常研发并维护所有CI/CD流程,自动化测试,自动化部署等。",
        "3.负责解决客户在不同平台上遇到的各种问题,包括性能问题,业务问题等。",
        "4.使用各自框架本身的一些特性结合公司的音视频产品做性能优化等。",
      ],
    },
    {
      company_name: "株式会社POPER",
      department_name: "前端架构师 项目经理",
      work_time: ["2019.09", "2023.04"],
      work_desc: [
        "1.作为公司前端架构师,负责公司前端各项目的架构设计。包括移动端APP,Web端,与桌面应用程序的架构,涉及音视频通信工具,IM。",
        "2.作为项目经理,承担scrum master的职责并进行PO需求分析,管理工程师的日常工作。",
        "3.基于Jira研发管理工具,提高公司敏捷开发的效率。",
        "4.独立负责许多项目的0到1建设,其中包括项目的初始化、业务分析、开发、联调测试、上线等环节。",
      ],
    },
    {
      company_name: "北京锐界科技",
      department_name: "Web前端工程师",
      work_time: ["2017.07", "2019.01"],
      work_desc: [
        "负责公司ERP系统的前端架构与全站开发。该系统为机器人自动生产衣物的控制后台,期间解决诸多性能问题与工厂大型数据绘图问题。",
      ],
    },
    {
      company_name: "同程旅行",
      department_name: "Web前端工程师",
      work_time: ["2014.09", "2017.07"],
      work_desc: [
        "1.期间从实习生到转正,负责同程旅行APP端中部分Hybrid混合项目的开发工作",
        "2.根据项目特点,自主创新实现出m站跟Hybrid项目的代码统一方案。",
        "3.后期承担scrum master的职责",
      ],
    },
  ],
  projectList: [
    {
      project_skills: ["electron"],
      project_name: "electron sdk开源项目",
      project_role: "跨平台工程师",
      project_time: "2023.04 - 至今",
      project_desc: "基于公司的音视频c++ sdk封装到electron框架,使用electron 自带的视频编解码能力,提高整个electron sdk自渲染链路上的性能体验(包括帧率,内存,GPU等性能优化)。了解熟悉chromium以及整个electron的构建流程,并在此基础上进行二次开发。",
      project_content:"解决客户在electron上遇到的各种问题,包括electron本身的常见业务问题以及音视频相关问题",
    },
    {
      project_skills: ["react native"],
      project_name: "rn sdk源项目",
      project_role: "跨平台工程师",
      project_time: "2023.04 - 至今",
      project_desc: "基于公司的音视频c++ sdk封装到react-native框架。使用NativeModules封装iOS和Android的一些原生功能,并在RN层进行调用。(如画中画,UIView的渲染等)。",
      project_content: "解决客户在rn上遇到的各种问题,包括rn本身的常见业务问题以及音视频相关问题",
    },
    {
      project_skills: ["flutter"],
      project_name: "flutter sdk开源项目",
      project_role: "跨平台工程师",
      project_time: "2023.04 - 至今",
      project_desc: "基于公司的音视频web sdk封装到flutter web框架,实现flutter4个平台一份代码实现音视频能力",
      project_content: "解决客户在flutter上遇到的各种问题,包括flutter本身的常见业务问题以及音视频相关问题,对flutter web的性能优化有一定的经验。",
    },
    {
      project_skills: ["Vue", "React Native", "Jenkins"],
      project_name: "Comiru、Comiru入退室",
      project_role: "前端架构师、项目经理",
      project_time: "2019.09 - 2023.04",
      project_desc:
        "根据公司PC端业务与日本线下补习班的模式,分析其中的特点和问题,并结合移动设备的特性,分别设计出教务管理Comiru和打卡出勤Comiru入退室2个APP。",
      project_content:
        "进行从零到一的项目架构,根据PO的诉求提出实现方案和建议并管理日常开发的工作,合理安排版本迭代的节奏。结合Sentry与Google Analytics的埋点数据分析APP的潜在问题和风险预测。自主通过Jenkins设计出一键式打包分发上架流程。",
    },
    {
      project_skills: ["React", "Flutter"],
      project_name: "ComiruAir",
      project_role: "前端架构师",
      project_time: "2020.01 - 2023.04",
      project_desc:
        "基于Agora与Amazon Chime实现的一款在线音视频通话WebApp,包括ComiruAirAPP。",
      project_content:
        "承担初期开发全部的工作,并根据不同WebRTC供应商接口使用规则,设计出让业务层统一接入的SDK,它可在不改变业务层时进行供应商切换来降低公司成本。后任SM带领工程师完成后续迭代。",
    },
    {
      project_skills: ["React", "Electron"],
      project_name: "Comiru IM",
      project_role: "前端架构师、项目经理",
      project_time: "2022.08 - 2023.04",
      project_desc:
        "基于SendBird与Electron的一款IM桌面应用产品。上架于Apple与Microsoft平台。",
      project_content:
        "根据CTO的基本要求,按照产品经理的思维来设计产品的形态与起草整个产品所有的前后端技术细节,实现项目的初期架构与部分模块的开发。",
    },
    {
      project_skills: ["Angular2", "FIS", "d3.js", "Echarts"],
      project_name: "机器人管理ERP系统",
      project_role: "Web前端工程师",
      project_time: "2017.07 - 2019.01",
      project_desc: "大型SAP后台管理系统",
      project_content:
        "负责ERP系统的架构与全站开发。该系统含大量的图形处理,通过使用d3.js与Echarts来实现业务的要求。针对svg绘制与canvas绘制的图标做了很多优化来提高使用体验。同时针对系统数据量庞大,页面dom渲染过多问题做了性能上的优化。由于是SAP项目,设计了一套完整的项目懒加载来提高项目的访问速度,这其中包括组件库的设计,页面模块化等重构。",
    },
    {
      project_skills: ["Angular1", "Webpack", "React"],
      project_name: "Hybrid混合WebApp研发",
      project_role: "Web前端工程师",
      project_time: "2014.09 - 2017.07",
      project_desc: "基于Webview的Hybrid混合Web开发",
      project_content:
        "负责同程旅行APP端Hybrid混合项目的开发工作,并基于zepto与ant-design实现出一套代替Native组件的UI库,将m站跟Hybrid项目的代码进行统一。发布时通过webpack相关配置来进行区分式打包,大大降低了开发的人力,提高了业务的开发效率。",
    },
    {
      project_skills: ["Zepto", "artTemplate", "gulp", "grunt"],
      project_name: "活动专题H5开发",
      project_role: "Web前端工程师",
      project_time: "2014.09 - 2017.07",
      project_desc: "M站和APP中的活动页面开发",
      project_content:
        "基于Zepto,artTemplate来实现业务的一些H5活动页面,解决了诸多移动端的疑难杂症如输入框遮挡问题,首屏渲染效率优化,不同手机设备(include WP)的UI适配等。",
    },
  ],
  aboutme: [
    "• 拥有丰富的web开发,app开发,Electron开发等跨端开发经验,有诸多海内外应用实战经验。",
    "• 有丰富的开源项目开发经验,对项目的CICD,自动化测试,自动化部署有很多经验。",
    "• 有丰富的移动端和PC端应用程序架构经验,带领团队开发过即时通讯,IM等多样化产品。",
    "• 掌握前端MVVM框架如React,Vue.js,Angular。",
    "• 对HTML、CSS有深刻地理解,掌握原生JS的编写且有面向对象编程的经验。",
    "• 喜欢钻研自动化,对前端工程化,前后端性能优化有一定经验与见解。",
    "• 掌握前端常用的构建工具如Webpack,Gulp。",
    "• 熟悉后端语言如PHP,Node.js等。",
    "• 有多年的scrum master管理经验,熟悉scrum开发模式,有许多Jira,Tapd等敏捷开发工具的管理经验。",
    "• 具有一定的学习能力、沟通能力和团队合作意识。",
  ],
  // locales: {
  //   en_US: {
  //   },
  // },
};

export type ResumeConfig = {
  avatar: {
    src?: string;
  };

  profile: {
    name: string;
    mobile?: string;
    email?: string;
    github?: string;
    workExpYear?: string;
    workPlace?: string;
    positionTitle?: string;
  };

  educationList?: Array<{
    edu_time: string[];
    school: string;
    major?: string;
    academic_degree?: string;
  }>;

  workExpList: Array<{
    company_name: string;
    department_name: string;
    work_time: string[];
    work_desc: string[];
  }>;

  projectList?: Array<{
    project_skills: string[];
    project_name: string;
    project_role: string;
    project_desc?: string;
    project_content?: string;
    project_time?: string;
  }>;

  awardList?: Array<{
    award_info: string;
    award_time?: string;
  }>;

  aboutme: string[];

  locales?: {
    [key: string]: ResumeConfig;
  };
};
