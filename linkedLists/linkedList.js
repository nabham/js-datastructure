
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function padList(list, padLength, padWith) {
  for (let i = 0; i < padLength; i++) {
    const node = new Node(padWith);
    node.next = list.head;
    list.head = node;
  }
}

LinkedList.prototype.push = function (element) {
  this.length++;
  const node = new Node(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.insertBefore = function (targetNode, element) {

  const node = new Node(element);

  if(this.length === 0) {
    if(!targetNode) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    return null;
  }

  let currNode = this.head;
  let prevNode;

  if(this.head.value === targetNode.value) {
    node.next = this.head;
    this.head = node;
    this.length++;
    return;
  }

  while(currNode && currNode.value !== targetNode.value) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  if(!currNode) {
    return null;
  }

  node.next = currNode;
  prevNode.next =  node;

  return true;
}

LinkedList.prototype.pop = function () {

  if (this.isEmpty()) {
    return null;
  }

  let node = this.tail;
  this.length--;

  if (this.tail === this.head) {
    this.tail = null;
    this.head = null;
    return node;
  }

  let currNode = this.head;
  let prevNode;
  while (currNode.next) {
    if (currNode.next === this.tail) {
      prevNode = currNode;
      break;
    }
    currNode = currNode.next;
  }

  prevNode.next = null;
  this.tail = prevNode;

  return node;
}

LinkedList.prototype.get = function (index) {

  if (index < 0 || index > this.length - 1) {
    return null;
  }

  if (index === 0) {
    return this.head;
  }

  let i = 0;
  let currNode = this.head;

  while (i < index) {
    i++;
    currNode = currNode.next;
  }

  return currNode;
}

LinkedList.prototype.delete = function (index) {

  if (index < 0 || index > this.length - 1) {
    return null;
  }

  this.length--;
  let currNode = this.head;

  if (index === 0) {
    this.head = this.head.next;
    return currNode;
  }

  let i = 0;
  let prevNode;

  while (i < index) {
    i++;
    prevNode = currNode;
    currNode = currNode.next;
  }

  const deletedNode = currNode;

  prevNode.next = currNode.next;

  if (prevNode.next === null) {
    this.tail = prevNode;
  }

  return deletedNode;
}

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

LinkedList.prototype.print = function () {

  let values = [];
  let currNode = this.head;

  while (currNode) {
    values.push(currNode.value);
    currNode = currNode.next;
  }

  return values.join(' => ');
}

LinkedList.prototype.sum = function(list) {

  const sumList = new LinkedList();

  const calculateSum = (list1Elem, list2Elem) => {

    if (!list1Elem || !list2Elem) {
      return 0;
    }
  
    let remainder = calSum(list1Elem.next, list2Elem.next);
  
    let sum = list1Elem.value + list2Elem.value + remainder;
  
    sumList.insertBefore(sumList.head, sum % 10);
  
    return sum > 9 ? 1 : 0;
  }
  
  if(this.length > list.length) {
    padList(list, list1.length - list.length, 0)
  } else {
    padList(list1, list.length - list1.length, 0)
  }

  let sum = calculateSum(this.head, list.head);
  if(sum) {
    sumList.insertBefore(sumList.head, 1);
  }

  return sumList;
}