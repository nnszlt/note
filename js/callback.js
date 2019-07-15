function name(callback) {
    setTimeout(() => {
        var name = "9999"
        callback(name)
    }, 1000);
}
name(function (res) {
    console.log(res)
})