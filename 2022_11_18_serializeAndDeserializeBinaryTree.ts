// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), 
// which deserializes the string back into the tree.


// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/*
 * Encodes a tree to a single string.
 */
const serialize = (root: TreeNode | null): string => {
  const result = []
  
  const recurseSerialize = (node: TreeNode | null) => {
      if (!node) return result.push(null)
      recurseSerialize(node.right)
      recurseSerialize(node.left)
      result.push(node.val)
  }
  recurseSerialize(root)
  return result.join(',')
}

/*
* Decodes your encoded data to tree.
*/
const deserialize = (data: string): TreeNode | null => {
  const tree = data.split(',')
  
  const createTree = () => {
      const curVal = tree.pop()
      if (curVal === '') return null
      const nextNode = new TreeNode(+curVal)
      nextNode.left = createTree()
      nextNode.right = createTree()
      return nextNode
  }
  return createTree()
}