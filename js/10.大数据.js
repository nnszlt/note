{
  //数组对象去重   差集
  console.time("arr")
  var arr = [];
  for (var i = 0; i <= 44; i++) {
    arr.push({
      name: i
    })
  }
  var del = [{
    name: 1
  }, {
    name: 3
  }, {
    name: 90
  }, {
    name: 2
  }, {
    name: 40
  }, {
    name: 20
  }, {
    name: 50
  }, {
    name: 99
  }]


  const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
  };
  var a = differenceBy(arr, del, v => v.name);
  console.log(a)
  console.timeEnd("arr")

}



{
  //数组对象 获取重复指  交集
  console.time("arr")
  var arr = [];
  for (var i = 0; i <= 44; i++) {
    arr.push({
      name: i
    })
  }
  var del = [{
    name: 1
  }, {
    name: 3
  }, {
    name: 90
  }, {
    name: 2
  }, {
    name: 40
  }, {
    name: 20
  }, {
    name: 50
  }, {
    name: 99
  }]


  const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
  };
  var a = differenceBy(arr, del, v => v.name);
  console.log(a)
  console.timeEnd("arr")

}





// {
//   //数组对象 合并去重  
//   console.time("arr")
//   var arr = [];
//   for (var i = 20; i <= 44; i++) {
//     arr.push({
//       name: i
//     })
//   }
//   var del = [{
//     name: 1
//   }, {
//     name: 3
//   }, {
//     name: 90
//   }, {
//     name: 2
//   }, {
//     name: 40
//   }, {
//     name: 20
//   }, {
//     name: 50
//   }, {
//     name: 99
//   }]


//   const differenceBy = (a, b, fn) => {
//     var a=[...a,...b];
//     const s = new Set(a);
//     console.log(s)
//     // return a.filter(x => !s.has(fn(x)));
//   };
//   var a = differenceBy(arr, del, v => v.name);
//   console.log(a)
//   console.timeEnd("arr")

// }