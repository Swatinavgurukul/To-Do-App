function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + obj.name + '.');
  };
  return obj;
}
var a = createNewPerson("diw")
console.log(a)
