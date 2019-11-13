{
    (function fn() {
        for (var i = 0; i < 2; i++) {
            console.log(i) // 0 1
        }
    })()



    (function fn() {
        for (var i = 0; i < 2; i++) {
            // (function(){
            var backup = i;
            setTimeout(function () {
                console.log(backup);
            }, 10); // 1 1
            // })();
        }
    })()




    (function fn() {
        for (var i = 0; i < 9; i++) {
            (function () {
                var backup = i;
                setTimeout(function () {
                    console.log(backup); //0 1
                }, 10);
            })();
        }
    })()
}



{
    (() => {
        for (var i = 0; i < 5; i++) {


            (function () {
                // var a = i
                setTimeout(function () {
                    console.log(i)
                }, 10)
            })()
        }

    })()



    (() => {
        for (var i = 0; i < 5; i++) {
            (function () {
                var a = i
                setTimeout(function () {
                    console.log(a)
                }, 10)
            })()
        }

    })()

    (() => {
        for (var i = 0; i < 5; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(i)
                }, 10)
            })(i)
        }

    })()



}



// {
function test6() {
    var results = count();
    var f1 = results[0];
    var f2 = results[1];
    var f3 = results[2];
};

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
        // console.log(i)
    }
    return arr;
}
test6()
// }