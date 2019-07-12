{
    //先说一下async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行。 写一个async 函数

    async function timeout() {
        return 'hello world';
    }

}

{
    async function timeout() {
        return 'hello world'
    }
    timeout().then(res => {
        console.log(res)
    })
    console.log('虽然在后面，但是我先执行');
}

{

    //如果async 函数中有返回一个值 ,当调用该函数时，内部会调用Promise.solve() 方法把它转化成一个promise 对象作为返回，但如果timeout 函数内部抛出错误呢？ 那么就会调用Promise.reject() 返回一个promise 对象
    async function timeout(flag) {
        if (flag) {
            return 'hello world'
        } else {
            throw 'my god, failure'
        }
    }
    // console.log(timeout(true))  // 调用Promise.resolve() 返回promise 对象。
    // console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。

    timeout(true).then(success => {
        console.log(success)
    })
    //如果函数内部抛出错误， promise 对象有一个catch 方法进行捕获。
    timeout(false).catch(err => {
        console.log(err)
    })

}

{
    //  注意await 关键字只能放到async 函数里面

    function doubleAfter2seconds(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2 * num)
            }, 2000);
        })
    }

    //　现在再写一个async 函数，从而可以使用await 关键字， await 后面放置的就是返回promise对象的一个表达式，所以它后面可以写上 doubleAfter2seconds 函数的调用

    // async function testResult() {
    //     let result = await doubleAfter2seconds(30);
    //     console.log(result);
    // }

    // testResult();

    async function testResult() {
        let first = await doubleAfter2seconds(30);
        let second =first+ await doubleAfter2seconds(50);
        let third = second+ await doubleAfter2seconds(30);
        console.log(first +"-"+ second +"-"+ third);
    }
    testResult()
}