
class Schelling {

    constructor (grid, n_races, empty_ratio) {
        this.grid = grid; 
        this.n_races = n_races;
        this.empty_ratio = empty_ratio;
    }

    populate () {
    }
    /*
    seed (grid) {
        const total = grid.height * grid.width;
        const empty = Math.floor(total * this.empty_ratio);
        const occupied = total - empty;

        let arr = [];
        // todo(ben): this needs to handle n races, instead of just 2
        for (var i = 0; i < occupied; i++) { 
            arr.push(i % 2);
        }
        for (var i = 0; i < empty; i++) {
            arr.push(' ');
        }
        let shuffled = grid.shuffle(arr);
        grid.cells = grid.toGrid(shuffled);

        return grid;
    }

    /*
    tick () {
        // for each occupied spot
        for (var cell in grid.cells) {
            if cell.is_empty() continue();
            if is_unhappy(cell) {
                // mark for moving
            }

        }
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
        const neighbors = cell.get_neighbors();
        // check sim thresh
        // return bool
    }
   */
}
