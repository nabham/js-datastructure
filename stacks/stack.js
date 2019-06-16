
function Stack() {
  this.data = [];
}

Stack.prototype.push = function (element) {
  this.data.push(element);
};

Stack.prototype.pop = function () {
  return this.data.pop();
}

Stack.prototype.peek = function () {
  return this.data[this.data.length - 1];
}

Stack.prototype.isEmpty = function () {
  return this.data.length === 0;
}