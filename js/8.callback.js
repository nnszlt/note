function name(callback) {
    setTimeout(() => {
        var name = "zeta"
        callback(name)
    }, 1000);
}

function age(callback) {
    setTimeout(() => {
        var age = "18"
        callback(age)
    }, 1000);
}


name((name) => {
    age((age)=>{
        console.log(`我叫${name},今年${age}岁`)
    })
})