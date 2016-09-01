
class Schelling {

    constructor (grid, n_races, empty_ratio) {
        this.grid = grid; 
        this.n_races = n_races;
        this.empty_ratio = empty_ratio;
    }

    populate () {
        let grid = this.grid,
            cells = grid.cells;

        const total = grid.height * grid.width;
        const empty = Math.floor(total * this.empty_ratio);
        const occupied = total - empty;

        let arr = [];
        for (var i = 0; i < occupied; i++) { 
            arr.push(i % this.n_races);
        }
        for (var i = 0; i < empty; i++) {
            arr.push(' ');
        }

        let arr2d = this.grid.convert_2d(arr);
        this.grid.cells = this.grid.shuffle(arr2d);
    }

    /*
    tick () {
        // for each occupied spot
        // check neighbors
        // evaluate similarity_threshold (is_unhappy)
        // if unhappy
        // mark for random moving
        //
        // shuffle all marked
        // for each marked
        // shuffle unoccupied
    }

    is_unhappy (cell) {
        // get neighbors
        // check sim thresh
        // return bool
    }
   */
}
