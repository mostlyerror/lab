var split = require("split")
var Transform = require("stream").Transform
var util = require("util")

util.inherits(ProblemStream, Transform)
function ProblemStream () {
    Transform.call(this, { objectMode: true })

    this.numProblemsToSolve = null
    this.puzzleSize = null
    this.currentPuzzle = null
}

ProblemStream.prototype._transform = function (line, encoding, processed) {
    if (this.numProblemsToSolve === null) {
        this.numProblemsToSolve = +line
    }
    else if (this.puzzleSize === null) {
        this.puzzleSize = (+line) * (+line)
        this.currentPuzzle = []
    }
    else {
        var numbers = line.match(/\d+/g)
        this.currentPuzzle.push(numbers)
        this.puzzleSize--

        if (this.puzzleSize === 0) {
            this.push(this.currentPuzzle)
            this.puzzleSize = null
        }
    }
    processed()
}

util.inherits(SolutionStream, Transform)
function SolutionStream () {
  Transform.call(this, { objectMode: true })
}

SolutionStream.prototype._transform = function (problem, encoding, processed) {
  var solution = solve(problem)
  this.push(solution)
  processed()

  function solve (problem) {
    return false;
  }
}

util.inherits(FormatStream, Transform)
function FormatStream () {
  Transform.call(this, { objectMode: true })
  this.caseNumber = 0
}

FormatStream.prototype._transform = function (solution, encoding, processed) {
  this.caseNumber++
  var result = solution ? "Yes": "No"
  var formatted = "Case #" + this.caseNumber + ": "  + result + "\n"
  this.push(formatted)
  processed()
}

process.stdin.setEncoding("utf8")

process.stdin
    .pipe(split())
    .pipe(new ProblemStream())
    .pipe(new SolutionStream())
    .pipe(new FormatStream())
    .pipe(process.stdout)
