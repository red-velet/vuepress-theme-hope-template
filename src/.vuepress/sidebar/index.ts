import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  //java基础-左侧边栏
  "/docs/basicKnowledge/java": [
    {
      text: "javase",
      icon: "java",
      collapsible: true,
      prefix: "javase/",
      children: [
        { text: '1、多线程', icon: "asynchronous", link: 'thread/' },
        { text: '2、集合框架', icon: "map", link: 'collection/' },
      ],
    },
    {
      text: "javaweb", icon: "keyboard", collapsible: true, prefix: "javaweb/",
      children: [
        { text: '1、测试', icon: "keyboard", link: '1/' },
      ],
    },
    {
      text: "git", icon: "git", collapsible: true, prefix: "git/",
      children: [
        { text: '1、测试', icon: "git", link: '1/' },
      ],
    },
    {
      text: "linux", icon: "linux", collapsible: true, prefix: "linux/",
      children: [
        { text: '1、测试', icon: "linux", link: '1/' },
      ],
    },
  ],
  //努力学习的基本功-左侧边栏
  "/docs/basicKnowledge/basicSkill/": [
    //设计模式折叠
    {
      text: '设计模式', icon: "activity", prefix: 'designPattern/', collapsible: true,
      children: [
        { text: '第一章 前言导读', icon: "activity", link: 'pre/' },
        { text: '第二章 软件设计原则', icon: "activity", link: 'principle/' },
        { text: '第三章 创建型设计模式', icon: "activity", link: 'creation/' },
        { text: '第三章 结构型设计模式', icon: "activity", link: 'structure/' },
        { text: '第三章 行为型设计模式', icon: "activity", link: 'behavior/' },
      ]
    },
    //mysql折叠
    {
      text: "数据库Mysql", icon: "mysql", collapsible: true, prefix: "mysql/",
      children: [
        { text: '1、mysql基础', icon: "mysql", link: 'simple/' },
        { text: '2、mysql进阶1-组成和架构', icon: "structure", link: 'advance/1/' },
        { text: '3、mysql进阶2-事务管理', icon: "proposal", link: 'advance/2/' },
        { text: '4、mysql进阶3-索引机制', icon: "info", link: 'advance/3/' },
        { text: '5、mysql进阶4-锁机制', icon: "lock", link: 'advance/4/' },
        { text: '6、mysql进阶5-日志系统', icon: "page", link: 'advance/5/' },
        { text: '7、mysql进阶6-MVCC机制', icon: "change", link: 'advance/6/' },
      ],
    },
    //计算机网络折叠
    {
      text: '计算机网络', icon: "network", prefix: "computerNetwork/", collapsible: true,
      children: [
        { text: '第一章 概述', icon: "notebook", link: '1/' },
      ]
    },
    //操作系统折叠
    {
      text: '操作系统', icon: "OS", link: 'operateSystem/'
    },
    //数据结构折叠
    {
      text: '数据结构', icon: "structure", prefix: 'dataStructure/', collapsible: true,
      children: [
        { text: '第一章 基本概述和术语', icon: "notebook", link: '1/' },
      ]
    },
  ],
  //其它code-左侧边栏
  "/docs/basicKnowledge/code/": [
    //算法code折叠
    {
      text: '算法code', icon: "activity", prefix: 'algorithm/',
      collapsible: true,
      children: [
        { text: '数组', icon: "activity", link: 'array/' },
        { text: '链表', icon: "activity", link: 'linkedList/' },
        { text: '字符串', icon: "activity", link: 'string/' },
      ]
    },
  ],

  //分界线============================================================================  
  //分界线============================================================================  
  //分界线============================================================================  

  //框架侧边栏
  //spring framework-左侧边栏
  "/docs/framework/springframework/": [
    //spring折叠
    {
      text: 'Spring', icon: "leaf", prefix: 'spring/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
    //springmvc折叠
    {
      text: 'SpringMVC', icon: "leaf", prefix: 'mvc/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
    //springboot折叠
    {
      text: 'SpringBoot', icon: "leaf", prefix: 'boot/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
    //springcloud折叠
    {
      text: 'SpringCloud', icon: "leaf", prefix: 'cloud/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
    //springcloud alibaba折叠
    {
      text: 'SpringCloudAlibaba', icon: "leaf", prefix: 'alibaba/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
  ],
  //ORM framework-左侧边栏
  "/docs/framework/ORMframework/": [
    //mybatis折叠
    {
      text: 'Mybatis', icon: "linter", prefix: 'mybatis/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "linter", link: '1/' },
      ]
    },
    //mybatis plus折叠
    {
      text: 'Mybatis Plus', icon: "style", prefix: 'mp/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "style", link: '1/' },
      ]
    },
    //springboot jpa折叠
    {
      text: 'SpringBoot JPA', icon: "leaf", prefix: 'jpa/',
      collapsible: true,
      children: [
        { text: '1、测试', icon: "leaf", link: '1/' },
      ]
    },
  ],
  //other framework-左侧边栏
  "/docs/framework/otherframework/": [
    //netty折叠
    {
      text: 'Netty', icon: "autumn", prefix: 'netty/',
      collapsible: true,
      children: [
        { text: '1、BIO、NIO、AIO', icon: "autumn", link: '1/' },
      ]
    },
  ],

  //分界线============================================================================  
  //分界线============================================================================  
  //分界线============================================================================  

  //中间件侧边栏
  //nosql 左侧边栏
  "/docs/middleware/nosql/": [
    {
      text: "Redis", icon: "storage", collapsible: true, prefix: "redis/",
      children: [
        { text: '1、redis基础', icon: "storage", link: 'simple/' },
        { text: '2、redis进阶', icon: "storage", link: 'advance/' },
      ],
    },
    {
      text: "MongoDB", icon: "write", collapsible: true, prefix: "mongodb/",
      children: [
        { text: '1、测试', icon: "write", link: '1/' },
      ],
    },
  ],
  //消息队列 左侧边栏
  "/docs/middleware/mq/": [
    {
      text: "Kafka", icon: "storage", collapsible: true, prefix: "kafka/",
      children: [
        { text: '1、测试', icon: "storage", link: '1/' },
      ],
    },
    {
      text: "RabbitMQ", icon: "storage", collapsible: true, prefix: "rabbit/",
      children: [
        { text: '1、测试', icon: "storage", link: 'simple/' },
      ],
    },
    {
      text: "RocketMQ", icon: "storage", collapsible: true, prefix: "rocket/",
      children: [
        { text: '1、测试', icon: "storage", link: '1/' },
      ],
    },
  ],
  //构建和部署 左侧边栏
  "/docs/middleware/bd/": [
    {
      text: "Maven", icon: "storage", collapsible: true, link: "maven/",
    },
    {
      text: "Nginx", icon: "nginx", collapsible: true, link: "nginx/",
    },
    {
      text: "Docker", icon: "docker", collapsible: true, link: "docker/",
    },
  ],
  //其它 左侧边栏
  "/docs/middleware/other/": [
    {
      text: "ELK", icon: "storage", collapsible: true, prefix: "elk/",
      children: [
        { text: '1、测试', icon: "storage", link: 'simple/' },
      ],
    },
  ],

  //分界线============================================================================  
  //分界线============================================================================  
  //分界线============================================================================  

  //阶段项目侧边栏
  "/projects/project": [
    {
      text: "JavaSE阶段",
      icon: "java",
      collapsible: true,
      prefix: "javase/",
      children: [
        { text: '1、超级数组', icon: "array", link: 'superarray/' },
        { text: '2、超级链表', icon: "link", link: 'superlinked/' },
        { text: '3、反射注解实战', icon: "return", link: 'reflect/' },
        { text: '4、多用户即时聊天系统', icon: "community", link: 'chat/' },
      ],
    },
    {
      text: "Web阶段",
      icon: "Apache",
      collapsible: true,
      prefix: "web/",
      children: [
        { text: '1、模拟Servlet容器', icon: "Apache", link: 'servlet/' },
        { text: '3、LayUI使用', icon: "javascript", link: 'layui/' },
        { text: '2、校园宿舍管理系统', icon: "Apache", link: 'dormitory/' },
      ],
    },
    {
      text: "SSM阶段",
      icon: "leaf",
      collapsible: true,
      prefix: "spring/",
      children: [
        { text: '1、SSM练手小项目', icon: "material", link: 'practice/' },
        { text: '2、湖师校园健康', icon: "strong", link: 'health/' },
      ],
    },
    {
      text: "BOOT阶段",
      icon: "autumn",
      collapsible: true,
      prefix: "boot/",
      children: [
        { text: '1、湖师外卖到家', icon: "direction", link: 'delivery/' },
        { text: '2、湖师校园探店', icon: "people", link: 'comment/' },
      ],
    },
    {
      text: "微服务阶段",
      icon: "snow",
      collapsible: true,
      prefix: "cloud/",
      children: [
        { text: '1、短信通道平台', icon: "comment", link: 'sms/' },
      ],
    },
  ],
  //好用功能侧边栏
  "/projects/function": [
    {
      text: "功能FUNCTION",
      icon: "plugin",
      collapsible: true,
      children: [
        { text: '1、AOP实现统一管理', icon: "plugin", link: 'aop/' },
      ],
    },
  ],
  //开源笔记侧边栏
  "/opensource/": [
    {
      text: "建站相关",
      icon: "structure",
      prefix: "website/",
      children: [
        { text: '1、Waline', icon: "waline", link: 'waline/' },
        { text: '2、Vuepress-theme-hope', icon: "vue", link: 'vuepress-theme-hope/' },
      ],
    },
    {
      text: "软件安装",
      icon: "software",
      prefix: "software/",
      children: [
        { text: '1、IDEA安装', icon: "set", link: 'idea/' },
      ],
    },
  ],

  //小知识点分享侧边栏
  "/opensource/knowledge/": [
    {
      text: "小知识分享",
      icon: "share",
      children: [
        { text: '1、XML头文件解析', icon: "alias", link: 'xml-head.md' },
        { text: '2、Try{}和Try()', icon: "alias", link: 'tryandtry.md' },
      ],
    },
  ],


  //好用分享侧边栏
  "/share/": [
    {
      text: "插件分享",
      icon: "plugin",
      prefix: "plugins/",
      children: [
        { text: '1、lombok', icon: "context", link: 'lombok/' },
        { text: '2、save action', icon: "context", link: 'saveaction/' },
      ],
    },
    {
      text: "好用设置",
      icon: "setting",
      prefix: "settings/",
      children: [
        { text: '1、typora主题设置', icon: "alias", link: 'typora/' },
      ],
    },
  ],
});
