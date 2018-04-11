function uniteUnique(...arr) {
    const set1 = new Set();
    arr.map(x => x.map(y => set1.add(y)));
    return Array.from(set1);
}
module.exports = uniteUnique;
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [5],
    [4]
]));