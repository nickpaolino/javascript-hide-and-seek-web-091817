function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const app = document.getElementById('nested');
  return app.querySelector('div.target');
}

function increaseRankBy(n){
  const nodes = document.querySelectorAll('.ranked-list')
  // for (const item of document.querySelectorAll('.ranked-list')){
  //   nodes.push(item);
  // }
  for (const node of nodes){
    for (const li of node.children){
      var num = parseInt(li.innerText);
      var newNum = num + n;
      li.innerText = `${newNum}`;
    }
  }
}

function deepestChild(){
  const grandNode = document.getElementById('grand-node');
  var element = grandNode;
  while (element.children.length !== 0){
    element = element.children[0]
  }
  const innerText = element.innerText;

  return innerText
}
