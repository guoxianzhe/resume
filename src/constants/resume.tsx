export const RESUME: ResumeConfig = {
  avatar: {
    src: "https://avatars.githubusercontent.com/u/53285945?v=4",
  },
  profile: {
    name: "郭贤哲",
    email: "guo90962@gmail.com",
    mobile: "18515598524",
    github: "https://github.com/guoxianzhe",
    workExpYear: "工作经验: 8年",
    workPlace: "",
    positionTitle: "职位:前端工程师/项目经理",
  },
  educationList: [
    {
      edu_time: ["2011.09.01", "2015.06.30"],
      school: "太原理工大学",
      major: "软件工程",
      academic_degree: "本科",
    },
    {
      edu_time: ["2019.03.01", "2019.08.30"],
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
      company_name: "株式会社POPER",
      department_name: "前端架构师 项目经理",
      work_time: ["2019.09", "至今"],
      work_desc: [
        "1.作为公司前端架构师,负责公司前端各项目的架构设计。包括移动端APP,Web端,与桌面应用程序的架构,涉及音视频通信工具,IM。",
        "2.作为项目经理,承担scrum master的职责并进行PO需求分析,管理工程师的日常工作,并向CTO和董事会进行汇报。",
        "3.基于Jira研发管理工具,提高公司敏捷开发的效率。",
        "4.独立负责许多项目的从0到1建设,这其中包括了项目的初始化、业务分析、开发、联调测试、上线等各环节。",
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
      company_name: "同程旅游",
      department_name: "Web前端工程师",
      work_time: ["2014.09", "2017.07"],
      work_desc: [
        "1.期间从实习生到转正,负责同程旅游APP端中部分Hybrid混合项目的开发工作",
        "2.根据项目特点,自主创新实现出m站跟Hybrid项目的代码统一方案。",
        "3.后期承担scrum master的职责",
      ],
    },
  ],
  projectList: [
    {
      project_name: "株式会社POPER",
      project_role: "前端架构师 项目经理",
      project_time: "2019.09 - 至今",
      project_desc: "",
      project_content: "",
    },
    {
      project_name: "北京锐界科技",
      project_role: "Web前端工程师",
      project_time: "2017.07 - 2019.01",
      project_desc: "",
      project_content: "",
    },
    {
      project_name: "同程旅游",
      project_role: "Web前端工程师",
      project_time: "2014.09 - 2017.07",
      project_desc: "",
      project_content: "",
    },
  ],
  aboutme: [
    "• 拥有丰富的web开发,app开发,Electron开发等跨端开发经验,有诸多海内外应用实战经验。",
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
