{
    var a = 1;
    var x = function () {
        console.log(a);
    };

    function f() {
        var a = 2;
        x();
    }
    f() //1 因为是在 f 外部定义的所以a=1


    var a = 1;

    function f() {
        var a = 2;

        function x() {
            console.log(a);
        };
        x();
    }
    f() //2 因为是在 f 内部定义的所以a=1

}

{
    var p = 2;
    function f(p) {
     p=12312312
      console.log(p)
    }
    f(9090);
    console.log(p) 

}