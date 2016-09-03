

class Grid {

    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.cells = [];
        //this.init();
    }

	flat_cells () {
		return this.flatten(this.cells);
	}

    flatten (arr) {
        const flat = [].concat(...arr);
        return flat.some(Array.isArray) ? flatten(flat) : flat;
    }

    // 1d -> 2d array
    convert_2d (arr) {
        let w = this.width;
        let res = [];
        for (var i = 0; i < arr.length; i += w) {
            res.push(arr.slice(i, i + w));
        }
        return res;
    }

    get_matching(pattern) {
		let arr = [], cell;
		for (var y = 0; y < grid.height; y++) {
			for (var x = 0; x < grid.width; x++) {
				cell = this.get_cell(x, y)
				if (cell === pattern) {
					arr.push([x, y]);
				}
			}
		}
		return arr;
	}

    is_2d (arr) {
        if (!arr.length) return false;
        return Array.isArray(arr[0]);
    }

    // return scrambled single or multi dimensional array
    shuffle (arr) {
        let multi = this.is_2d(arr);
        arr = this.flatten(arr);
        arr.shuffle();
        return (multi ? this.convert_2d(arr) : arr);
    }

    get_cell (x, y) {
        return this.cells[y][x];
    }

    set_cell (x, y, val) {
    	return this.cells[y][x] = val;
	}

    get_neighbors (x, y) {
        const dirs = {
            'nw': [-1, -1],
            'n' : [ 0, -1],
            'ne': [ 1, -1],
            'w' : [-1,  0],
            'e' : [ 1,  0],
            'sw': [-1,  1],
            's' : [ 0,  1],
            'se': [ 1,  1]
        }

        let neighbors = [], dx, dy, nx, ny;
        for (var dir in dirs) {
            [dx, dy] = dirs[dir];
            nx = x + dx;
            ny = y + dy;

            if ((nx < 0) || 
                (nx > (this.width-1)) || 
                (ny < 0) || 
                (ny > (this.height-1))) {
                continue;
            } else {
                neighbors.push(this.get_cell(x + dx, y + dy));
            }
        }

        return neighbors.filter((e) => { return e !== " " });
    }

    toString () {
        let out = "\n";
        for (var i in this.cells) {
			out += this.cells[i].join(" ");
			out += "\n";
        }
        return out;
    }
}

