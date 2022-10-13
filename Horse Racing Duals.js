var N = parseInt(readline());
var sortedStrengthsArray = [];
for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    sortedStrengthsArray.push(parseInt(pi));
}

var minDiff = 10000000;
sortedStrengthsArray = sortedStrengthsArray.sort(function(a, b) {
    return (b - a);
});

