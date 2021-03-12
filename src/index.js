// module.exports = function reverse (n) {
//     if (n.toString()[0] == '-') {
//         return +n.toString().slice(1).split('').reverse().join('');
//     } else {
//         return +n.toString().split('').reverse().join('');
//     }
// }
module.exports = function reverse (n) {
    return Math.abs(n).toString().split('').reverse().join('');
}