String.prototype.replaceAll = function (search, replace) {
  const value = this.valueOf();

  const regex = new RegExp(search, "g");

  return value.replace(regex, replace);
};
