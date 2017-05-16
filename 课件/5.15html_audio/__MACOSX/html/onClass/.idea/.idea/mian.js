


/*
* 类 抽象的事物
*
* 对象 具体化的事物
* */

/*
* 构造函数 -> 具体的事物（对象）
* new
* */

//构造函数
function Person(_name) {
    // this -> 表示 通过类 创建出来的 每一个对象
    this.name = _name;
    console.log(this.name);
}

var xiaoMing = new Person("小明");
var xiaoHong = new Person();
var xiaoHong1 = new Person();
var xiaoHong2 = new Person();
