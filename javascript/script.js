function sectionNode(id) {
  var node = document.createElement('SECTION');
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3";
  node.id = id;
  return node;
}
function logoNode() {
  var node = document.createElement('DIV');
  node.classList = "flex justify-between items-center";
  node.innerHTML = `<img src="images/lewagon-logo.png" alt="" class="w4">
            <p class="tc fw8 f4">@xiaohu Pei</p>`;
  return node;
}
function divFlex(list) {
  var node = document.createElement('DIV');
  node.classList = "flex flex-column justify-around";
  for (var p of list) {
    var p_node = document.createElement('P');
    p_node.classList = "f5 fw6";
    p_node.innerHTML = p;
    node.appendChild(p_node);
  }
  var logo = logoNode();
  node.appendChild(logo);
  node.childNodes[0].classList.add("mt5")
  return node;
}

function showDetails(e,sub_id) {
  var all = e.split('-');
  var index = all[1];
  var language = all[2];
  var takeaway = `takeaway_${language}`
  const ps = WORKSHOPS.events[index-1][takeaway];
  var node = sectionNode(sub_id);
  var node_div = divFlex(ps);
  node.appendChild(node_div);
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}







function showDetails_1_zh(e,sub_id) {
  console.log(e,sub_id, obj)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Product pitch: precisely define your value proposition</p>
      <p class="f5 fw6">Mockup: make a basic mockup of your app</p>
      <p class="f5 fw6">Database: what's the core database scheme of your product</p>
      <p class="f5 fw6 mb4">User stories: write and organize your user stories</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function showDetails_2_zh(e,sub_id) {
  console.log(e,sub_id)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Project Management Methodologies</p>
      <p class="f5 fw6">GitHub Workflow</p>
      <p class="f5 fw6">Project Management Tools</p>
      <p class="f5 fw6 mb4">Setting Project Scope</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function showDetails_3_zh(e,sub_id) {
  console.log(e,sub_id)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Use Git for version control</p>
      <p class="f5 fw6">use GitHub for teamwork</p>
      <p class="f5 fw6">GitHub Pages</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function showDetails_4_zh(e,sub_id) {
  console.log(e,sub_id)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Build a landing page to test your business idea</p>
      <p class="f5 fw6">Improve your marketing skills</p>
      <p class="f5 fw6">Meet other amazing human beings with a growth mindset</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function showDetails_5_zh(e,sub_id) {
  console.log(e,sub_id)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Basic conceps of Wechat mini programs</p>
      <p class="f5 fw6">Get a mini program ID</p>
      <p class="f5 fw6">Wechat mini program IDE</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function showDetails_6_zh(e,sub_id) {
  console.log(e,sub_id)
  var node = document.createElement('SECTION')
  node.classList = "tc lewagon-red white hover-white br2 ba shadow-1 h-auot ph3 mv3"
  node.id = sub_id;
  var node_html = `
    <div class="flex flex-column justify-around">
      <p class="f5 fw6 mt5">Basic conceps of Wechat mini programs</p>
      <p class="f5 fw6">Get a mini program ID</p>
      <p class="f5 fw6">Wechat mini program IDE</p>
      <div class="flex justify-between items-center">
        <img src="images/lewagon-logo.png" alt="" class="w4">
        <p class="tc fw8 f4">@xiaohu Pei</p>
      </div>
    </div>`
  node.innerHTML = node_html;
  x = document.getElementById(e);
  y = document.getElementById(sub_id);
  if (y == null) {
    x.appendChild(node);
  } else {
    x.removeChild(x.childNodes[x.childNodes.length - 1]);
  }
}

function display(id,id2,btn,btn2) {
  document.getElementById(id).classList.toggle("dn");
  document.getElementById(id2).classList.toggle('dn');
  document.getElementById(btn).classList.toggle('lewagon-red');
  document.getElementById(btn2).classList.toggle('lewagon-red');
}

function workshops(id) {
  var myHeaders = new Headers();
  fetch('https://xhacker-1256477841.cos.ap-shanghai.myqcloud.com/workshops.json', {
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'default'
    }).then((response) => {console.log(response)}).then((data) => {console.log(data)});
}

 const WORKSHOPS = {"events":
  [
    {
      "id": 1,
      "header": "Product Specifications 101",
      "header_zh": "Product Specifications 101",
      "description": "We see lots of entrepreneurs struggling to explain their product in a clear and concise way. As a direct consequence, they often don't know how to work with designers and developers because they don't speak their language. The role of a good entrepreneur is to break those barriers when it comes to his product. Otherwise, he won't be able to work correctly with the rest of his team. \nIn this workshop, we will cover all the important steps in the conception of a technical product: \n\n• Product pitch: precisely define your value proposition (we'll give lots of examples)\n• Mockup: make a basic mockup of your app using Sketch\n• Database: what's the core database scheme of your product\n• User stories: write and organise your user stories on Trello.\n\nAs an entrepreneur, this workshop will give you a simple methodology to precisely define the product you want to build and work efficiently with developers and designers without unnecessary processes or misunderstandings.\nWe will take lots of real-life example (Product Hunt, Airbnb, etc..) to illustrate this event!",
      "description_zh": "我们看到很多企业家不知道以简洁明了的方式解释他们的产品。作为一个直接的结果，他们常常不知道如何与设计师和开发人员合作。一个好的企业家的作用是在连接产品的各个部门，打破产品开发中的各种障碍。\n在这个工作坊中，我们将涵盖一个技术产品概念中的所有重要步骤：\n\n产品展示：精确定义你的价值主张（我们会给出很多例子）\n模型：用草图制作你的应用程序的基本模型\n数据库：你的产品的核心数据库方案是什么？\n用户故事：在TRELLO上编写和组织你的用户故事。\n\n作为一个企业家，这个研讨会将给你一个简单的方法来精确地定义你想要建立的产品，避免没有不必要的过程或误解，有效地与开发人员和设计师一起工作。\n我们将采取许多现实的例子（Product Hunt，Airbnb等）来帮助你更好的理解这些策略以及最终运用在你的产品中！",
      "tips": "You do NOT need any prior coding experience to be able to attend (and enjoy!)\nPlease BRING YOUR LAPTOP!",
      "tips_zh": "本工作坊适合零基础编程经验的人\n请带上笔记本电脑！",
      "takeaway_en": ["Product pitch: precisely define your value proposition", "Mockup: make a basic mockup of your app", "Database: what's the core database scheme of your product", "User stories: write and organize your user stories"],
      "takeaway_zh": ["产品展示：精确定义你的价值主张", "模型：用草图制作你的应用程序的基本模型", "数据库：你的产品的核心数据库方案是什么？", "用户故事：撰写和组织你的用户故事"],
      "finished": true,
      "month": "May",
      "day": "29th",
      "image": "Products_specs.png",
      "files": ["Product%20Specs%20101-naked%20hub.pdf", "Product%20Specs%20101-naked%20hub.key"]
    },
    {
      "id": 2,
      "header": "Technical Workflow for Startups",
      "header_zh": "初创企业工作流",
      "description": "Working with developers is hard for creative people and could even be frustrating. How is it possible that changing the size of the logo can take 2 weeks? \n\nLet's explore how a startup development team can be efficient with the right workflow in place. We will take examples of famous businesses and explain the best practices",
      "description_zh": "对于富有创造力的人来说，与开发人员一起工作来说可能很难，有些时候甚至可能会令人沮丧。有些细微技术细节的改变：比如更改Logo的大小，有些时候技术人员可能需要2周的时间来完成。\n\n在当今以光速推进的信息时代，以这样缓慢的速度推进项目，特别是对于初创企业的发展来说是致命的。\n\n不过好消息是，通过采用适当的工作流程，科技创业团队效率的效率是可以提高的。\n在这个工作坊，我们将以知名企业为例，介绍最佳实践方式。",
      "tips": "You do NOT need any prior coding experience to be able to attend (and enjoy!)\nPlease BRING YOUR LAPTOP!",
      "tips_zh": "本工作坊适合零基础编程经验的人\n请带上笔记本电脑！",
      "takeaway_en": ['Project Management Methodologies', 'GitHub Workflow', 'Project Management Tools','Setting Project Scope'],
      "takeaway_zh": ['Project Management Methodologies', 'GitHub Workflow', 'Project Management Tools','Setting Project Scope'],
      "finished": true,
      "month": "June",
      "day": "26th",
      "image": "Technical_Workflow.png",
      "files": ["LeWagon-Technical-Workflow_xiaohuPei.pdf", "LeWagon-Technical-Workflow_xiaohuPei.key"]
    },
    {
      "id": 3,
      "header": "Git & GitHub for Beginners",
      "header_zh": "给初学者的Git和GitHub介绍",
      "description": "As a project manager or founder of a tech business, there are a host of headaches that you need to deal with on a daily basis.\n\nWith collaborative code review, project management, documentation support, and hosting in one place, GitHub has everything you need to build and scale an efficient team's workflow.\n\nIn this workshop, Le Wagon will help you to setup Git (the file versioning system) and walk you through the project management tactics used by the best tech startups.",
      "description_zh": "Github正在席卷世界。\n如果你不熟悉Github，简单来讲：它是一个用于编码人员专用的领英和团队在线文档合作，分享，传输的Google Drive。\n这是一个包含名为“Git”的软件版本控制系统的网站，允许软件开发人员在线免费托管他们的代码，并允许人们跟踪他们本人以及与他们一起工作的团队的项目。\n\n它是编码人员以及同龄人学习，连接和分享开源代码的绝佳去处。听起来很有趣？\n如果你听说过Git和GitHub，你知道这对开发者来说是一个非常热门的平台。\n\n你想开始在你的科技团队组织中使用Github，但一直不知道从何开始？你想要最终理解什么是“Commit”，“Push”或“Conflict”？那么这场活动就是为你而设！",
      "tips": "You do NOT need any prior coding experience to be able to attend (and enjoy!)\nPlease BRING YOUR LAPTOP!",
      "tips_zh": "本工作坊适合零基础编程经验的人\n请带上笔记本电脑！",
      "takeaway_en": ['Use Git for version control', 'Use GitHub for teamwork', 'GitHub Pages'],
      "takeaway_zh": ['Use Git for version control', 'Use GitHub for teamwork', 'GitHub Pages'],
      "finished": true,
      "month": "July",
      "day": "24th",
      "image": "Git_beginners.png",
      "files": ["LeWagon-Technical-Workflow_xiaohuPei.pdf", "LeWagon-Technical-Workflow_xiaohuPei.key"]
    },
    {
      "id": 4,
      "header_en": "Build a website in 2 hours",
      "header_zh": "零基础2小时学会建站",
      "description": "A landing page allows you to guide your traffic into business with a clear call-to-action. Successful lean startups always test their value proposition through simple and effective landing pages before making decisions. They iterate endlessly, tweak it, gather data, optimize conversion flow!\n\nJoin our free workshop and explore the world of web development. We will teach you to code and design your own landing page using HTML5 and CSS3 elements.\nThis is one of the most satisfying experiences and only the tip of the iceberg of what you're capable of in programming!",
      "description_zh": "登陆页面能够通过“行为召唤”，将点击访问量转化为实际商业行为。\n成功的创业公司总是在做决策之前，不断地通过简单有效的登陆页面来测试自己的价值主张。\n\n他们总是不停迭代，微调，收集数据，优化转化率！",
      "tips": "You do NOT need any prior coding experience to be able to attend (and enjoy!)\nPlease BRING YOUR LAPTOP!\nPlease download Sublime Text: www.sublimetext.com",
      "tips_zh": "本工作坊适合零基础编程经验的人\n请带上笔记本电脑！",
      "takeaway_en": ['Build a landing page to test your business idea', 'Improve your marketing skills', 'Meet other amazing human beings with a growth mindset'],
      "takeaway_zh": ['Build a landing page to test your business idea', 'Improve your marketing skills', 'Meet other amazing human beings with a growth mindset'],
      "finished": true,
      "month": "Aug",
      "day": "28th",
      "image": "Website.png",
      "files": ["LeWagon-2-hour%20landing%20page_xiaohupei.pdf", "LeWagon-2-hour%20landing%20page_xiaohupei.key"]
    },
    {
      "id": 5,
      "header_en": "WeChat mini program 101",
      "header_zh": "微信小程序",
      "description": "welcome to the world of Wechat mini programs",
      "description_zh": "欢迎进入微信小程序的世界",
      "tips": "You do NOT need any prior coding experience to be able to attend (and enjoy!)\nPlease BRING YOUR LAPTOP!",
      "tips_zh": "本工作坊适合零基础编程经验的人\n请带上笔记本电脑！",
      "takeaway_en": ['Basic conceps of Wechat mini programs', 'Get a mini program ID', 'Wechat mini program IDE'],
      "takeaway_zh": ['Basic conceps of Wechat mini programs', 'Get a mini program ID', 'Wechat mini program IDE'],
      "finished": true,
      "month": "Sep",
      "day": "18th",
      "image": "Miniapp.png",
      "files": ["LeWagon-mini-app_xiaohuPei.pdf", "LeWagon-mini-app_xiaohuPei.key"]
    },
    {
      "id": 6,
      "header_en": "Building layouts with CSS",
      "header_zh": "使用CSS设计网站布局",
      "description": "Learn to code and design all the most useful web-components like buttons, avatars, cards, navs, dropdown, list items… with nice CSS tricks and techniques.",
      "description_zh": "学习如何编写以及设计网页产品中最实用的组成部分—按键，头像，卡片，操控界面，下拉式菜单，清单......需要使用的工具是CSS语言的一些操作技巧",
      "tips": "You must have some HTML/CSS basic knowledge (and have played a bit with Bootstrap)\nIf you have attended the '2 hours landing page' workshop, this is enough to come to this one!\nPlease BRING YOUR LAPTOP!",
      "tips_zh": "必须具有一些HTML/CSS基础知识（并且有操作Bootstrap的经验）\n如果你曾经参加过Le Wagon的“两小时制作登陆界面”工作坊，就足够参加这次的工作坊了！\n请带上笔记本电脑！",
      "takeaway_en": ['Popular components with examples from nice websites (Product Hunt, Medium, etc.)', 'How to organize your CSS with component files, with naming conventions!', 'The Flexbox', 'Useful CSS3 techniques to code cool components'],
      "takeaway_zh": ['Popular components with examples from nice websites (Product Hunt, Medium, etc.)', 'How to organize your CSS with component files, with naming conventions!', 'The Flexbox', 'Useful CSS3 techniques to code cool components'],
      "finished": false,
      "month": "Oct",
      "day": "30th",
      "image": "CSS.png",
      "files": ["LeWagon-CSS-Layouts_xiaohuPei.pdf", "LeWagon-CSS-Layouts_xiaohuPei_xiaohuPei.key"]
    },
    {
      "id": 7,
      "header_en": "Introduction to JavaScript",
      "header_zh": "JavaScript 入门",
      "description_en": "Introduction to JavaScript\nwill be add latter",
      "description_zh": "JavaScript 入门\nwill be add latter",
      "tips": "Introduction to JavaScript\nwill be add latter",
      "tips_zh": "JavaScript 入门\nwill be add latter",
      "takeaway": "Introduction to JavaScript\nwill be add latter",
      "takeaway_zh": "JavaScript 入门\nwill be add latter",
      "finished": false,
      "month": "to be defined",
      "day": "",
      "image": "",
      "files": []
    },
    {
      "id": 8,
      "header": "Introduction to APIs",
      "header_zh": "API 编程接口入门",
      "description": "Introduction to APIs\nwill be add latter",
      "description_zh": "API 编程接口入门\nwill be add latter",
      "tips": "Introduction to APIs\nwill be add latter",
      "tips_zh": "API 编程接口入门\nwill be add latter",
      "takeaway": "Introduction to APIs\nwill be add latter",
      "takeaway_zh": "API 编程接口入门\nwill be add latter",
      "finished": false,
      "month": "to be defined",
      "day": "to be defined",
      "image": "",
      "files": []
    },
    {
      "id": 9,
      "header": "CSS3 Grids & layouts design",
      "header_zh": "CSS3 网格和布局设计",
      "description": "CSS3 Grids & layouts design\nwill be add latter",
      "description_zh": "CSS3 网格和布局设计\nwill be add latter",
      "tips": "CSS3 Grids & layouts design\nwill be add latter",
      "tips_zh": "CSS3 网格和布局设计\nwill be add latter",
      "takeaway": "CSS3 Grids & layouts design\nwill be add latter",
      "takeaway_zh": "CSS3 网格和布局设计\nwill be add latter",
      "finished": false,
      "month": "to be defined",
      "day": "to be defined",
      "image": "",
      "files": []
    }
  ],
 "locations": [
  "Hongqiao", "Jiujianglu", "Xintiandi", "Hunanlu"
 ],
 "speaker": [
  "xiaohu Pei", "Michael Xu", "Lucas", "Audrey"
 ]
}


