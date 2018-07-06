function getFirstSelector(selector){
return document.querySelector (selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = getElementbyID('grand-node')
  let nextnode = node.children[0]
  while(nextnode)
