function World() {
  console.log('world running.');
}

module.exports = function() {
  this.World = World;
};
