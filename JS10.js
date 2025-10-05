let alo = [
    111,
    'sombat',
    true,
    555,
    {
        name : 'sombat',
        age : 20
    },
    [111,222,333]
]
console.log('--------------------')

console.log(alo[1])
console.log(alo[1][5])
console.log(alo[4].name)


alo.array.forEach((item, index) => {
    console.log(item)
    console.log(index)
});
console.log('--------------------')

alo.map((item, index) => {
    console.log(index)
    console.log(item)
})
console.log('--------------------')

for(let item of alo){
    console.log(item)
}
console.log('--------------------') 
for(let index in alo){
    console.log(index)
    //console.log(alo[index])
}