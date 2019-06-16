

function Queue() {
  this.data = [];

  // get data() {
  //   return 'temp';
  // }
}

Queue.prototype.enqueqe = function (element) {
  this.data.push(element);
}

Queue.prototype.dequeqe = function () {
  return this.data.shift();
}

Queue.prototype.peek = function () {
  return this.data[this.data.length - 1];
}

Queue.prototype.isEmpty = function () {
  return this.data.length === 0;
}

module.exports = Queue;