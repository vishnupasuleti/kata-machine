function searchBST(head: BinaryNode<number> | null, needle: number): boolean {
  if (head == null) return false;
  if (head.value == needle) return true;
  if (head.value > needle) return searchBST(head.left, needle);
  return searchBST(head.right, needle);
}


export default function dfs(head: BinaryNode<number>, needle: number): boolean {
   return searchBST(head, needle);
}


function insert(head: BinaryNode<number>, val: number) {
  if (head == null) {
    head = { value: val, left: null, right: null }
    return;
  }  

  if (head.value > val) {
    if (head.right) {
      insert(head.right, val);
    } else {
      head.right = { value: val, left: null, right: null }
    }
  } else {
    if (head.left) {
      insert(head.left, val);
    } else {
      head.left = { value: val, left: null, right: null }
    }
  }
}

function deleteNode(head: BinaryNode<number> | null, val: number) : BinaryNode<number> | null {
  if (head == null) return head;

  if (head.value == val) {
    if (head.left == null && head.right == null) {
      head = null;
      return head;
    } else if (head.left == null) {
      const temp = head.right;
      head = null;
      return temp;
    } else if (head.right == null) {
      const temp = head.left;
      head = null;
      return temp;
    } else {
      let node : BinaryNode<number> | null = head.left;
      while(node.right != null) {
        node = node.right;
      }
      head.value = node.value;
      head.left = deleteNode(head.left, node.value);
    }
  } else if (head.value > val) {
    head.right = deleteNode(head.right, val);
  } else {
    head.left = deleteNode(head.left, val);
  }

  return head;
}