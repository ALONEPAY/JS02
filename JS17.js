//Arrow Function/Function Arrow
//ใช้หลักการเดียวกับ Fuction Expression
 
let data1 = () => {
    console.log(111)
}
 
const data2 = (n1, n2) => {
    console.log(n1 + n2)
    return 'Wow Wow Wow'
}
 
let data3 = 555
 
data1()
console.log( data2(100, 200) )
data1 = 'Hello'
console.log( data1)