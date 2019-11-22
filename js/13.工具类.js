const obj = [
    {
        name: 'foo',
        level: 'low',
        age: '100',
        money: 'empty'
    },
    {
        name: 'zlt',
        level: 'low',
        age: '100',
        money: 'empty'
    }
]
// console.log(JSON.stringify(obj, ['name', 'age'])) //{"name":"foo","age":"100"}



console.log(obj.find(todo=>todo.name=='zlt'))