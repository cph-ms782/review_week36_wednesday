// review week 36 wednesday

// a)
console.log('a)');
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log(boys);
console.log(girls);

// b)
//concat() ændrer ikke på på eksisterende arrays, den skaber en ny
console.log('b)');
var all = boys.concat(girls);
console.log(all);

// c)
console.log('c)');
var comma = all.join(',');
console.log(comma);

var hyphen = all.join('-');
console.log(hyphen);

// d)
console.log('d)');
girls.push('Lone','Gitte');
console.log(girls);

// e)
console.log('e)');
boys.unshift('Hans','Kurt');
console.log(boys);

// f)
console.log('f)');
boys.shift('Hans');
console.log(boys);

// g)
console.log('g)');
girls.pop('Gitte');
console.log(girls);

// h)
console.log('h)');
all.splice(2,2);
console.log(all);

// i)
console.log('i)');
all.reverse();
console.log(all);

// j)
console.log('j)');

// k)
console.log('k)');

// i)
console.log('i)');

// m)
console.log('m)');
