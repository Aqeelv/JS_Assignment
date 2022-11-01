const h = 500; // before it was a;
const k = 700; // before it was b;
const l = 800; // before it was c;
console.log(`Q23 )
a = ${h} , b = ${k} , c = ${l}
`);
console.log(`a == b -----------------//${h == k}`); //false
console.log(`a != b -----------------//${h != k}`); //true
console.log(`a > b  -----------------//${h > k}`); //false
console.log(`a < b  -----------------//${h < k}`); //true
console.log(`a >= b -----------------//${h >= k}`); //false
console.log(`a <= b -----------------//${h <= k}`); //true
console.log(`a === b ----------------//${h === k}`); //false
console.log(`a <= b <=c -------------//${h <= k <= l}`); //true
console.log(`a != c !=b -------------//${(h != l) != k}`); //true
console.log(`a < b && c > b ---------//${h < k && l > k}`); //true
console.log(`a < b && c > b && a > c //${h < k && l > k && h > l}`); //false
console.log(`a > b || c > b ---------//${h > k || l > k}`); //true
console.log(`a > b || c < b || a < c //${h > k || l < k || h < l}`); //true
console.log(`undefined == null ------//${undefined == null}`); //true
console.log(`undefined == 0 ---------//${undefined == 0}`); //false
console.log(`null != 0 --------------//${null != 0}`); //true
console.log(`false != 0 -------------//${false != 0}`); //false
