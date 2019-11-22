var data = [{
    name: "全部分类",
    children: [{
            name: "衣服",
            children: [{
                    name: "男装",
                    children: [{
                        name: "背心"
                    }, {
                        name: "短裤"
                    }]
                },
                {
                    name: "女装",
                    children: [{
                        name: "连衣裙"
                    }, {
                        name: "休闲裤"
                    }]
                }
            ]
        },
        {
            name: "食品",
            children: [{
                    name: "网红零食",
                    children: [{
                        name: "拉面丸子"
                    }, {
                        name: "咪咪虾条"
                    }]
                },
                {
                    name: "糕点",
                    children: [{
                        name: "绿豆糕"
                    }, {
                        name: "手撕面包"
                    }]
                }
            ]
        }
    ]
}]
var dgdata = function () {
    var str = [];
    var dg = function (list) {
        list.forEach(function (row, index) {
            if (row.children) {
                row.type = true
                dg(row.children);
            } else {
                // str.push(row)
                row.type = true
            }
        })
    }
    dg(data);
    console.log(data);
}
dgdata() ///都写上true




// //下面使用递归来实现我们的需求  获取所有的名字
// var dgdata = function(){
//     var str = '';
//     var dg = function(list){
//         list.forEach(function(row){
//             if(row.children){
//                 dg(row.children);
//             }else{
//                 str += row.name+","
//             }
//         })
//     }
//     dg(data);
//     console.log(str);
// }
