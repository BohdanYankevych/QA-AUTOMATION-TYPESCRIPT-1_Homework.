const obj1 = {
    name: 'Joe',
    surname: 'Black',
    props: {
        age: 33,
        gender: 'male',
        'country of origin': 'USA'
    }

};

let obj2 = {};
obj2 = obj1;

obj2.name = 'John';
obj2['new field'] = 'new value';

console.log(obj2 === obj1);
console.log(obj1,obj2);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.values(obj1.props));
console.log(Object.entries(obj1));

console.log('_____________________________\n');

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'sports', 'music'],
    introduce() {
        console.log(`Hi, my name is ${this.name}, and I live in ${this.address.city}.`);
    }
};

// Виклик методу об'єкта
person.introduce();

