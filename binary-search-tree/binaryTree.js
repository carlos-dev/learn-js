function Node(value) {
  return ({
    data: value,
    left: null,
    right: null,
    show
  })

  function show() {
    return data
  }
}

function BST() {
  let root = null
  return ({
    insert,
    remove,
    findMin,
    findMax,
    find,
    getBST,
    inOrder,
    preOrder,
    postOrder
  })

  function insert(value) {
    const newNode = Node(value)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
}

function insertNode(root, newNode) {
  
}

const nums = BST()
nums.insert(17)
nums.insert(21)
nums.insert(9)
nums.insert(5)
nums.insert(32)
nums.insert(15)
nums.insert(20)
nums.insert(10)
nums.insert(68)
nums.insert(90)