function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}

Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
getName = function () {
    console.log(4);
};

function getName() {
    console.log(5);
}
Foo.getName(); // 2 函数本身就有一个属性getName，虽然原型链上也有，但除非没有属性 才去取原型链上的
getName(); // 4 由于函数声明被提前了，表达式在后，所以输出了4
/**
 *  Foo()函数返回内部的this，指向window，由于内部的getName变量，没有声明let或者var，
 * 会暴露为一个全局对象，所以返回了1
 */
Foo().getName(); // 1
getName(); //1 前面的函数执行，暴露了一个全局对象，所以为1
Foo.getName(); //2 直接获取 Foo的属性getName()
new Foo().getName(); //3 new Foo() 构造了一个实例对象，并继承了原型链上的对象方法
