{
    //resolve 成功  .then  //reject 失败 .catch()
    // const promise = new Promise(function (resolve, reject) {
    //     // ... some code

    //     if ( /* 异步操作成功 */ ) {
    //         resolve(value);
    //     } else {
    //         reject(error);
    //     }
    // });
}

{
    function promiseFun(flag) {
        return promise = new Promise((resolve, reject) => {
            setTimeout(res => {
                if (flag) {
                    resolve({
                        success: true
                    })
                } else {
                    reject({
                        success: false
                    })
                }
            }, 2000)

        })
    }

    promiseFun(true).then(res => {
        console.log(res)
    })

    promiseFun(false).catch(res => {
        console.log(res)
    })
}