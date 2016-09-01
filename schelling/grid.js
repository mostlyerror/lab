
class Grid {

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.cells = null;
    }

    /*
    seed (opts)  {
        let res = [];
        for (var x = 0; x < this.width; x++) {
            res.push([]);
            for (var y = 0; y < this.height; y++) {
                let obj = opts || {};
                let cell = {x:x, y:y};
                Object.assign(obj, cell);
                res[x].push(obj);
            }
        }
        return this.cells = res;
    }
   */

    shuffle () {

        let arr = [];
        for (var row in this.cells) {
            for (var cell in row) {
                arr.push(this.cells[row][cell]);
            }
        }

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
        if (this.cells) {
            for (var i in this.cells) {
                out += this.cells[i].join(" ");
                out += "\n";
            }
        }
        else {
            return null;
        }
        return out;
    }
}
