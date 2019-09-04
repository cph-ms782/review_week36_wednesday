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
console.log("Før sort: " + all);
all.sort();
console.log("Efter sort: " + all);

// k)
console.log('k)');
console.log("Før sort: " + all);
all.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log("Efter sort: " + all);

// i)
console.log('i)');
console.log("Før map: " + all);
var newAll = all.map(function hello(name){
    var fname = name.toUpperCase();
    return fname;
});
console.log("Efter map: " + newAll);

// m)
//Bruger l og P da der er navne med de forbogstaver i arrayet
console.log('m)');
console.log("Før filter: " + all);
const result = all.filter(name => name.charAt(0)==="l" || name.charAt(0)==="P");
console.log("Efter filter: " + result);

