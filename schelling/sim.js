

class Grid {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.cells = [];
	}

	toString () {
		let out = "",
			row,
			cells = this.cells;
		for (var r = 0; r < cells.length; r++) {
			if (Array.isArray(cells[r])) {
				out += "\n\n";
			}
			row = cells[r];
			out += row.map(function (e) { return e.tribe; }).join("\t");
		}
		return out;
	}

	// single dimensional fisher-yates shuffle
	shuffle (arr) {
		var i = arr.length,
			j,
			t;
		while (i) {
			j = Math.floor(Math.random() * i);
			t = arr[--i];
			arr[i] = arr[j];
			arr[j] = t;
		}
		return arr;
	}

	cells_2d (arr) { 
		let res = [];
		for (var y = 0; y < this.height; y++) {
			res.push([]);
			for (var x = 0; x < this.width; x++) {
				res[y][x] = arr[x + (y * this.width)];
			}
		}
		return this.cells = res;
	}

	get_empty () {
		let empty = [],
			r, cell;
		for (var y = 0; y < this.cells.length; y++) {
			r = this.cells[y].length;
			for (var x = 0; x < r; x++) {
				cell = this.cells[y][x];
				if (cell.tribe === null) {
					empty.push([x, y]);
				}
			}
		}
		return empty;
	}

	get_cell (x, y) {
		return this.cells[y][x];
	}

	get_neighbors(x, y) {
		let dirs = this.dirs,
			neighbors = [],
			nx, ny;
		for (let [dx, dy] of dirs) {
			nx = x + dx;
			ny = y + dy;
			if ((nx < 0) || (nx > this.width-1) || (ny < 0) || (ny > this.height-1)) {
				continue;
			}
			neighbors.push(this.get_cell(nx, ny));
		}
		return neighbors;
	}

	get dirs () {
		return [
			[-1,-1], [0,-1], [1,-1],
			[-1, 0], [1, 0],
			[-1, 1], [0, 1], [1, 1]
		];
	}
}


class Sim {
	constructor(grid, n_tribes, empty_ratio, similarity_threshold) {
		this.grid = grid;
		this.n_tribes = n_tribes;
		this.empty_ratio = empty_ratio;
		this.similarity_threshold = similarity_threshold;
		this.populate();
	}

	// randomly distribute n_tribes over the grid, leaving empty_ratio unoccupied.
	populate () {
		const total = this.grid.width * this.grid.height,
			  empty = Math.floor(total * this.empty_ratio),
			  occupied = total - empty;
		let arr = [];
		for (var i = 0; i < occupied; i++) {
			arr.push({ tribe: i % this.n_tribes });
		}
		for (var j = 0; j < empty; j++) {
			arr.push({ tribe: null });
		}
		this.grid.cells = this.grid.cells_2d(this.grid.shuffle(arr));
	}

	is_unhappy (house, neighbors) {
		// todo(ben): make threshold's have variation per household
		// compare house's thresh vs  # of like-neighbors / total
		// if thresh > ratio, no move
		// else mark for moving

		let n_neighbors = neighbors.filter((e) => { return e !== null}).length,
			like = neighbors.filter((e) => { return e === house.tribe }),
			ratio = like.length / n_neighbors;

		console.log(house, neighbors, ratio, ratio < this.similarity_threshold);
		return (ratio < this.similarity_threshold);
	}

	tick () {

		// determine which houses are unhappy
		let house, neighbors,
			unhappy = [];
		for (var y = 0; y < grid.cells.length; y++) {
			for (var x = 0; x < grid.cells[y].length; x++) {
				house = grid.get_cell(x, y);
				if (house.tribe === null) break;
				neighbors = grid.get_neighbors(x, y).map((e) => { return e.tribe })
				    //.filter((e) => { return e !== null });
				if (this.is_unhappy(house, neighbors)) {
					console.log(`house ${x}, ${y} is unhappy!`);
					unhappy.push([x,y,house.tribe]);
				}
			}
		}
		this.grid.shuffle(unhappy);
		unhappy.forEach((e) => {
			// todo(ben): make moves more intelligent, randomly for now. what's a better model?
		});
		console.log('unhappy: ',unhappy);
	}
}

var grid = new Grid(4, 3);
var sim = new Sim(grid, 2, 0.2, 0.3);
console.log(grid.toString());
sim.tick();

console.log(grid.get_empty());

