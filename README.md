# 记录

1. 定义时可参考变量

```bash
   Foo
   Boo
   Bar

   Logger
   Person
   Square
   Point
      对应方法：
      getPoint()
      getLine()


   Square
      对应方法：
      getArea()

   Person
      对应方法：
      sayName()

```

2. 概念

```bash
   yield 命令
   Generator 函数
   anonymous 匿名
```

3. 一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加

```js
class Point {}
// 相当于
class Point {
    constructor() {}
}
```

> 注意：nodemon 在新分支无效
