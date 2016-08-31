
class Grid {

    constructor(height, width, empty_ratio) {
        this.height = height;
        this.width = width;
        this.cells = null;
        this.empty_ratio = empty_ratio;
        this.seed();
    }

    seed () {
        const total = this.height * this.width;
        const empty = Math.floor(total * this.empty_ratio);
        const occupied = total - empty;

        let arr = [];
        for (var i = 0; i < occupied; i++) { 
            arr.push(i % 2);
        }
        for (var i = 0; i < empty; i++) {
            arr.push(' ');
        }

        let shuffled = this.shuffle(arr);
        this.cells = this.toGrid(shuffled);
    }

    toGrid (arr, chunk)  {
        let i = 0,
            res = [],
            l;
        while(i < this.height) {
            l = i * this.width;
            res.push(arr.slice(l, l + this.width));
            i++;
        }
        return res;
    }

    shuffle (arr) {
        var i = 0,
            j = 0,
            temp = null;
        for (i = arr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i+1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    toString () {
        let out = "";
        for (var i in this.cells) {
            out += this.cells[i].join(" ");
            out += "\n";
        }
        return out;
    }

}

const g = new Grid(30, 30, 0.2);
//console.log(g.cells);
console.log(g.toString());
