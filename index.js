function getFirstSelector(selector){
return document.querySelector (selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy() {
  const rankslist = document.querySelectorAll('.ranked-list')
  
  for (let i = 0, l = rankslist.length; i < l; i++) {
    let children = rankslist[i].children 
  
  for (j = 0, k = children.length; j < k; j++) {
  children[j].innerhtml = parseInt(children[j].innerhtml]) + n
  }
}
}

