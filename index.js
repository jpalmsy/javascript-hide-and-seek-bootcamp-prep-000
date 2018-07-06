function getFirstSelector(selector){
return document.querySelector (selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementbyID('grand-node')
  let nextNode = node.children[0]
  while(nextNode) {
  node = nextnode
  nextnode - node.children[0]
}
return node
}
