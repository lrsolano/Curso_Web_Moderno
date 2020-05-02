const onj = { a: 1, b:2, c:3, soma() {return a+b+c} }
console.log(JSON.stringify(onj))

//console.log(JSON.parse("{a : 1, b : 2, c : 3}"))
//console.log(JSON.parse("{'a' : 1, 'b' : 2, 'c' : 3}"))
console.log(JSON.parse('{"a" : 1, "b" : 2, "c" : 3}'))
console.log(JSON.parse('{"a" : 1, "b" : "string", "c" : true}'))