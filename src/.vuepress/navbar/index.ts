import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  //首页
  "/",

  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //===========分===============界=====================线======================= 

  //基础学习
  {
    //导航栏一级菜单
    text: "基础知识",
    icon: "user",
    prefix: "/docs/basicKnowledge/",
    //导航栏二级菜单
    children: [
      {
        text: "java基础", icon: "java", prefix: "java/",
        children: [
          { text: "javase", icon: "java", link: "javase/" },
          { text: "mysql", icon: "mysql", link: "mysql/" },
          { text: "linux", icon: "linux", link: "linux/" },
        ]
      },
      {
        text: "努力学习的基本功", icon: "share", prefix: "basicSkill/",
        children: [
          { text: "操作系统", icon: "OS", link: "operateSystem/" },
          { text: "计算机网络", icon: "network", link: "computerNetwork/" },
          { text: "数据结构", icon: "structure", link: "dataStructure/" },
          { text: "设计模式", icon: "activity", link: "designPattern/pre/" },
        ]
      },
      {
        text: "其它code", icon: "design", prefix: "code/",
        children: [
          { text: "算法code", icon: "activity", link: "alg/" },
        ]
      },
    ],
  },

  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================

  //开发框架
  {
    text: "开发框架", icon: "launch", prefix: "/docs/framework/",
    children: [
      {
        text: "Spring生态", icon: "edit", prefix: "springframework/",
        children: [
          { text: "spring", icon: "leaf", link: "spring/1/" },
          { text: "springmvc", icon: "leaf", link: "mvc/1/" },
          { text: "springboot", icon: "leaf", link: "boot/1/" },
          { text: "springcloud", icon: "leaf", link: "cloud/1/" },
          { text: "springalibaba", icon: "leaf", link: "alibaba/1/" },
        ]
      },
      {
        text: "持久层框架", icon: "engine", prefix: "ORMframework/",
        children: [
          { text: "mybatis", icon: "engine", link: "mybatis/1/" },
          { text: "mybatis-plus", icon: "engine", link: "mp/1/" },
          { text: "jpa", icon: "engine", link: "jpa/1/" },
        ]
      },
      {
        text: "其它框架", icon: "others", prefix: "otherframework/",
        children: [
          { text: "Netty", icon: "network", link: "netty/1/" },
        ]
      },
    ],
  },

  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //中间件
  {
    text: "中间件", icon: "process", prefix: "/docs/middleware/",
    children: [
      {
        text: "非关系型数据库", prefix: "nosql/",
        children: [
          { text: "redis", icon: "storage", link: "redis/simple/" },
          { text: "mongodb", icon: "storage", link: "mongodb/1/" },
        ],
      },
      {
        text: "消息队列", prefix: "mq/",
        children: [
          { text: "kafka", icon: "community", link: "kafka/1/" },
          { text: "rabbitmq", icon: "community", link: "rabbit/simple/" },
          { text: "rocketmq", icon: "community", link: "rocket/1/" },
        ],
      },
      {
        text: "构建部署", icon: "engine", prefix: "bd/",
        children: [
          { text: "maven", icon: "linter", link: "maven/" },
          { text: "nginx", icon: "nginx", link: "nginx/" },
          { text: "docker", icon: "docker", link: "docker/" },
        ]
      },
      {
        text: "其它", icon: "others", prefix: "other/",
        children: [
          { text: "elk", icon: "linter", link: "elk/" },
        ]
      },
    ],
  },

  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //===========分===============界=====================线=======================
  //项目功能
  {
    text: "项目功能", icon: "software", prefix: "/docs/projects/",
    children: [
      {
        text: "JavaSE阶段",
        prefix: "project/javase/",
        children: [
          { text: "超级数组", icon: "array", link: "superarray/" },
          { text: "多用户即时聊天", icon: "java", link: "chat/" },
        ]
      },
      {
        text: "Web阶段",
        prefix: "project/web/",
        children: [
          { text: "模拟Servlet容器", icon: "Apache", link: "servlet/" },
          { text: "校园宿舍管理系统", icon: "Apache", link: "dormitory/" },
        ]
      },
      {
        text: "SSM阶段",
        prefix: "project/spring/",
        children: [
          { text: "SSM练手小项目", icon: "leaf", link: "practice/" },
          { text: "湖师校园健康", icon: "leaf", link: "health/" },
        ]
      },
      {
        text: "Boot阶段",
        prefix: "project/boot/",
        children: [
          { text: "湖师外卖到家", icon: "autumn", link: "delivery/" },
          { text: "湖师校园探店", icon: "autumn", link: "comment/" },
        ]
      },
      {
        text: "微服务阶段",
        prefix: "project/cloud/",
        children: [
          { text: "实习-短信项目", icon: "snow", link: "sms/" },
        ]
      },
      {
        text: "功能function",
        icon: "function",
        link: 'function/aop/'
      },
    ],
  },
  {
    text: "其它内容", icon: "others", prefix: "/docs/others",
    children: [
      {
        text: "开源笔记", icon: "note",
        prefix: "/opensource/",
        children: [
          { text: "建站相关", icon: "structure", link: "website/waline/" },
          { text: "软件安装", icon: "software", link: "software/idea/" },
          { text: "小知识分享", icon: "note", link: "knowledge/" },
        ]
      },
      {
        text: "好用分享", icon: "note",
        prefix: "/share",
        children: [
          { text: "插件分享", icon: "plugin", link: '/plugins/lombok/' },
          { text: "好用设置", icon: "discover", link: "/settings/typora/" },
        ]
      },
      {
        text: "生活日常", icon: "note",
        prefix: "/life",
        children: [
          { text: "美好记录", icon: "plugin", link: '/picture/' },
          { text: "kpop", icon: "plugin", link: '/kpop' },
        ]
      },
    ]
  },
  {
    text: "友站链接",
    icon: "share",
    children: [
      { text: "CSDN", icon: "share", link: "https://blog.csdn.net/qq_45659753?type=blog" },
      { text: "GitHub", icon: "github", link: "https://github.com/BlueBeastMight" },
      { text: "博客初代目-redflavor", icon: "share", link: "https://redflavor.github.io" },
    ]
  },
]);
