function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
          if (newNode.next.value === current.value) {
              newNode.next = newNode.next.next; 
          }
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}

function reverseList(linkedList) {
  let firstNode = linkedList.head;
  let tempNode = ;
  let consecNode = prevConsecNode.next;
  firstNode.next = null;
  prevConsecNode.next = firstNode;

  while (consecNode.next !== null) {
    firstNode = prevConsecNode;
    prevConsecNode = consecNode;
    consecNode = prevConsecNode.next;
    prevConsecNode.next = firstNode;
  }
  
  
}