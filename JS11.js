let haha = {
    name : 'sombat',
    age : 20,
    isSTudent: true,
    address: {
        province : 'nakornpatom',
        contry : 'Thailand'
    },
        food: ['Pizza', 'KFC', 'Rice']
}

console.log(haha .age)
console.log(haha .address.province)
console.log(haha .food[2])
haha.address.contry = 'USA'
console.log(haha.address.contry)
console.log('-------------------')
console.log(haha)

//123456789

for (let key in haha){
    console.log(haha[key])
}
console.log('-------------------')
for (let item in Object.entries (haha)){
    console.log(key)
    console.log(value)
}
for (let value of Object.entries (haha)){
    console.log(key)
}

for (let key of Object.entries (haha)){
    console.log(key)
}