
var grid = new Grid(5, 10);
var sim = new Schelling(grid, 2, 0.3);
sim.populate();
console.log(sim.grid.toString());

