/**
 * JavaScript Objects
 */

 var person = {name:"Hans Børgesen", birthday:"12-12-2012", hobby:"Skovbrug", email:"hena@org.com"};

function iter(obj){
    for(prop in obj){
        console.log(prop,obj[prop]);
      }
      console.log("\n");
};
  
/**
 * 1.
 */
iter(person);
delete person.hobby;
iter(person);

/**
 * 2.
 */
function Person(name, birthday, hobby, email) {
    this.name = name;
    this.birthday = birthday;
    this.hobby = hobby;
    this.email = email;
  }
var newPerson = new Person("Hansine", "12-12-3023", "Landbrug", "hjeyh@org.com");
iter(newPerson);