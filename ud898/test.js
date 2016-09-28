
/*
var hi = new Promise(function(resolve, reject) {
    resolve('hi');
    resolve('bye'); // can only settle once
});
console.log(hi);

new Promise(function(resolve, reject) {
    var img = document.createElement('img');
    img.src = 'image.jpg';
    img.onload = resolve;
    img.onerror = reject;
    document.body.appendChild(img);
})
.then(finishLoading)
.catch(showAlternateImage);

new Promise(function (resolve) {
    console.log('first');
    resolve();
    console.log('second');
}).then(function () {
    console.log('third');
});
*/

function wait(ms) {
    return new Promise(function (resolve) {
        console.log(this);
        window.setTimeout(function() {
            resolve();
        }, ms);
    });
}

function finish() {
    document.querySelector('.completion').innerHTML = 'finished.';
}

var ms = 2000;
wait(ms).then(finish);
