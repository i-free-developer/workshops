function showDetails_1_en(e,sub_id) {
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

function showDetails_2_en(e,sub_id) {
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

function showDetails_3_en(e,sub_id) {
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

function showDetails_4_en(e,sub_id) {
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

function showDetails_5_en(e,sub_id) {
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

function showDetails_6_en(e,sub_id) {
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

function en() {
  var en = document.getElementById('en');
  en.classList.toggle("dn");
}
function workshops(id) {
  fetch('javascript/workshops.json').then((response) => {
    console.log(response);
  });
}
