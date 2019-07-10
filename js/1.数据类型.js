{
    var arr = [1, 2, 3];
    var obj = {
        name: "zcc"
    }

    typeof arr //obj 
    typeof obj //obj
    // 数组和对象 typeof 都是对象类型

    arr instanceof Array //判断是数组类型
    arr instanceof Object //判断是对象类型
}


{
    var obj = {
        p1: 1,
        p2: 2,
    };
    with(obj) {
        p1 = 4;
        p2 = 5;
    }

    //用with 改变对象值

}