{
    var a = 0;
    do {
        a += 1
        console.log(a)
    } while (a < 8)
    //先执行do 然后判断
} {
    var a = 0;
    while (a < 8) {
        a += 1
        console.log(a)
    }
    //判断在执行
}

{
    var a = 5
    lable: for (var i = 1; i < a; i++) {
        for (var b = 1; b < a; b++) {
            if (i == 1) {
                continue lable
            }
            console.log(i + "-" + b)
        }
    }
    //continue 跳出 执行lable 位置
}