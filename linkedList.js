class _Node{
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node (item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head){
      return null;
    }
    while (currNode.value !== item) {
      if(currNode.next === null) {
        console.log('Item not found')
        return;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findBefore(item) {
    let currNode = this.head;
    if (!this.head){
      return null;
    }
    while (currNode.next.value !== item) {
      if(currNode.next === null) {
        console.log('Item not found')
        return;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, beforeItem){
    if (this.head === null) {
      this.head = new _Node(item);
    }
    let currentNode = this.find(beforeItem);
    let previousNode = this.findBefore(currentNode.value);
    previousNode.next = new _Node(item, currentNode);
  }

  insertAfter(item, afterItem){
    if (afterItem.next === null) {
      this.insertLast(item);
    }
    let currentNode = this.find(afterItem);
    currentNode.next = new _Node(item, currentNode.next);
  }

  insertAt(item, position){
    if (position === 0 || this.head === null) {
      this.insertFirst(item);
    }
    let currNode = this.head;
    for (let i = 1; i < position; i++) {
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
  count++
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

function isEmpty(linkedList) {
  if (linkedList.head === null) {
    return "List is empty";
  } else {
    return `List has ${size(linkedList)} items`;
  }
}

function findPrevious(linkedList, item) {
  return linkedList.findBefore(item);
}

function findLast(linkedList) {
  let currNode = linkedList.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function reverseList(linkedList) {
  let firstNode = linkedList.head;
  let prevConsecNode = firstNode.next;
  let consecNode = prevConsecNode.next;
  firstNode.next = null;
  prevConsecNode.next = firstNode;

  while (consecNode.next !== null) {
    firstNode = prevConsecNode;
    prevConsecNode = consecNode;
    consecNode = prevConsecNode.next;
    prevConsecNode.next = firstNode;
  }

  consecNode.next = prevConsecNode;
  linkedList.head = consecNode;
  return display(linkedList);
}

function reverse2(linkedList) {
  let firstNode = linkedList.head;
  let nextValue = null;
  let nextItem = firstNode.next;
  

  while(firstNode.next !== null){
    firstNode.next = nextValue;
    nextItem.next = firstNode;
    nextItem = firstNode.next;
    nextValue = '';
  }

}

function thirdFromEnd(linkedList) {
  let currNode = linkedList.head;
  let count = size(linkedList) - 3;
  for (let i = 1; i < count; i++) {
    currNode = currNode.next;
  }
  return currNode;
}

function main() {
  let SLL = new LinkedList;
  let empty = new LinkedList
  //SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertFirst('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 1);
  //SLL.remove('Tauhida');
  return thirdFromEnd(SLL);
}



console.log(main());