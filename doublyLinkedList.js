class _Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let oldHeadNode = this.head;
    this.head = new _Node(item, this.head);
    if (oldHeadNode !== null) {
      oldHeadNode.prev = this.head;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.tail;
      console.log(currNode)
      if (currNode !== null) {
        this.tail = new _Node(item, null, currNode);
        currNode.next = this.tail;
      } else {
        currNode = this.head;
        while (currNode.next !== null) {
          currNode = currNode.next;
        }
        this.tail = new _Node(item, null, currNode);
        currNode.next = this.tail;
        this.tail.prev = currNode;
      }
    }
  }
}

function size(linkedList) {
  let count = 0;
  let currNode = linkedList.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
    count++;
  }
  count++;
  return count;
}

function display(linkedList) {
  let count = size(linkedList);
  let list = '';
  let currNode = linkedList.head;
  while (currNode.next !== null) {
    list += (`${currNode.value} -> `);
    currNode = currNode.next;
  }
  list += (`${currNode.value}`);
  return `This list has ${count} items in it, and are linked in this order: ${list}`;
}

function mainDLL() {
  let DLL = new DoublyLinkedList;
  DLL.insertFirst('Gage');
  DLL.insertLast('Alanna');
  DLL.insertLast('Persephone');
  return DLL;
}

console.log(mainDLL());