const Queue = require('./queue');

function PriorityQueue() {
  this.higherPriority = new Queue();
  this.lowerPriority = new Queue();
}

PriorityQueue.prototype.enqueue = function (element, isHigherPriority = false) {
  if (isHigherPriority) {
    this.higherPriority.enqueqe(element);
  } else {
    this.lowerPriority.enqueqe(element);
  }
}

PriorityQueue.prototype.dequeue = function () {
  if (!this.higherPriority.isEmpty()) {
    return this.higherPriority.dequeqe();
  } else {
    return this.lowerPriority.dequeqe();
  }
}

PriorityQueue.prototype.peek = function () {
  if (!this.higherPriority.isEmpty()) {
    return this.higherPriority.peek();
  } else {
    return this.lowerPriority.peek();
  }
}

PriorityQueue.prototype.isEmpty = function () {
  return this.higherPriority.isEmpty() && this.lowerPriority.isEmpty();
}