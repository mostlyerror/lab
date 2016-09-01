
var grid = new Grid(10, 10);
var sim = new Schelling(grid, 2, 0.3);
sim.populate();
console.log(grid.cells[0][0]);
//sim.grid.seed({ name: 'ben' });

