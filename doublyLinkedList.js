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

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return 'List is empty';
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        console.log('Item not found');
        return;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findBefore(item) {
    let currNode = this.head;
    if (!this.head) {
      return 'List is empty';
    }
    while (currNode.next !== item) {
      if (currNode.next === null) {
        console.log('Item not found');
        return;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findAtIndex(index) {
    let currNode = this.head;
    for(let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    return currNode;
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

  insertBefore(item, beforeItem) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.find(beforeItem);
    let previousNode = this.findBefore(currNode.value);
    let newNode = new _Node(item, currNode, previousNode);
    currNode.prev = newNode;
    previousNode.next = newNode;
  }

  insertAfter(item, afterItem) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }
    let prevNode = this.find(afterItem);
    if (prevNode.next === null) {
      this.insertLast(item);
      return;
    }
    let afterNode = prevNode.next;
    let newNode = new _Node(item, afterNode, prevNode);
    prevNode.next = newNode;
    afterNode.prev = newNode;
  }

  insertAt(item, index) {
    if (index === 0 || this.head === null) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    for (let i = 1; i < index; i++) {
      if (currNode.next === null) {
        console.log(`There are only ${i + 1} items in this list.`);
      } else {
        currNode = currNode.next;
      }
    }
    this.insertAfter(item, currNode.value);
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

function displayReverse(linkedList) {
  let count = size(linkedList);
  let list = '';
  let currNode = linkedList.tail;
  while (currNode.prev !== null) {
    list += (`${currNode.value} -> `);
    currNode = currNode.prev;
  }
  list += (`${currNode.value}`);
  return `This list has ${count} items in it, and reversed are linked in this order: ${list}`;
}

function reverseList(linkedList) {
  let currNode = linkedList.head;
  linkedList.tail = currNode;
  while (currNode.next !== null) {
    const newNext = currNode.prev;
    currNode.prev = currNode.next;
    currNode.next = newNext;
    currNode = currNode.prev;
  }
  currNode.next = currNode.prev;
  currNode.prev = null;
  linkedList.head = currNode;
  return linkedList;
}

function mainDLL() {
  let DLL = new DoublyLinkedList;
  DLL.insertFirst('Gage');
  DLL.insertLast('Persephone');
  DLL.insertLast('Sindragosa');
  DLL.insertAt('Alanna', 1);
  return display(reverseList(DLL));
}

console.log(mainDLL());