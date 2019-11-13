const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};
var a = difference([{
    a: 1
}, {
    a: 2
}], [{
    a: 1
}, {
    a: 3
}]);
console.log(a)





console.time("arr")
var arr = [];
for (var i = 0; i < 10000000; i++) {
    arr.push({
        name: i
    })
}
var del = [{
    name: 1
}, {
    name: 3
}, {
    name: 90
}, {
    name: 2
}, {
    name: 40
}, {
    name: 20
}, {
    name: 50
}, {
    name: 99
}]


const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
};

//    differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
var a = differenceBy(arr, del, v => v.name); // [ { x: 2 } ]
console.log(a)
console.timeEnd("arr")