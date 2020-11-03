class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getLine() {
        console.log('getLine')
        console.log(this.x)
    }

    getPoint() {
        console.log('getPoint')
    }
}

// prototype对象的constructor属性，直接指向“类”的本身
console.log(Point.prototype.constructor === Point);

// 添加类方法
// ES6好像不能通过这种方式添加属性
Point.prototype = {
    reduce() {
        console.log('reduce');
    }
}

Object.assign(Point.prototype, {
    delete() {
        console.log('delete');
    }
})

console.log('prototype', Point.prototype)

const p = new Point(1, 12)

const p1 = new Point(2, 23)


console.log('constructor:', p.constructor === Point.prototype.constructor)

// p的原型上添加这个方法，又因为p1与p的原型相同，所以p1也可以调用这个方法
p.__proto__.add = () => {
    console.log('add')
}

// 报错
// p.prototype.reduce = () => {
//     console.log('reduce')
// }



// true
console.log(p.__proto__ === p1.__proto__)

p.getPoint()
p.getLine()

// add
p.add()

// add
p1.add()


console.log('Point', Point)

console.log(p)

// Function
console.log(typeof Point)

// Object
console.log(typeof p)

// 类的实例上没有prototype
// undefined
console.log(p.prototype)

// true
console.log(p.__proto__.hasOwnProperty('getPoint'))

console.log(p.__proto__.hasOwnProperty('getLine'))

// anonymous 匿名
// {add: [Function: (anonymous)]}
console.log(p.__proto__)

// false
console.log(p.hasOwnProperty('getPoint'))

console.log(p.hasOwnProperty('getPoint'))





/**
 * 
 取值函数与 存值函数
*/
class MyClass {
    constructor() {}

    get prop() {
        // return 'getter'
        console.log('getter');
    }

    set prop(value) {
        console.log('setter:', value)
    }
}

const inst = new MyClass()


// 设值 setter
inst.prop = 123

// 取值 getter
inst.prop



/**
 * 属性表达式
 */

let methodName = 'getArea'

class Square {
    constructor() {}

    [methodName]() {}
}



/**
 * class表达式
 */

const Animal = class Animals {

    constructor(type, name) {
        this.type = type
        this.name = name
    }

    getAnimal() {
        console.log('getAnimal')
        console.log(Animals.type)
    }
}

const dog = new Animal('dog', 'Lantz')

dog.getAnimal()