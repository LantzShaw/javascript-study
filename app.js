function Point(x, y) {
    this.x = x
    this.y = y

    this.update = () => {
            console.log('update')
            console.log(this)
        }
        // 不能这样这声明
        // function update() {
        //     console.log('update')
        // }
}

// 会被下面的代码覆盖
Point.prototype.getPoint = function() {
    console.log('x:', this.x, 'y:', this.y)
}

Point.prototype = {
    getLine() {
        console.log('getLine')
    },

    getPoint() {
        console.log('getPoint')
    }
}

const p = new Point(12, 2)

// 会报错
// p.prototype.update()


// false
console.log(p.hasOwnProperty('getLine'))
console.log(p.hasOwnProperty('update'))


// {x: 12, y: 2}
console.log(p)

// Object
console.log(typeof p)

// Function
console.log(typeof Point)

// true
console.log(p.constructor === Point.prototype.constructor)

// ['getLine', 'getPoint']
console.log(Object.keys(Point.prototype))

console.log(Object.getOwnPropertyNames(Point.prototype))

p.getLine()
p.getPoint()
p.update()