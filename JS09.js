//เชื่อมข้อมูลหลายๆ ตัวเข้าด้วยกัน
let data1 = 50
let data2 = 'SAU'
console.log(data1+' WOW '+data2+' '+(10*20) )
console.log(data1,'WOW',data2,10*20)
console.log(`${data1} WOW ${data2} ${10*20}`)
console.log('---------------')
 
 
//คำสั่ง break, continue ใน loop
//break; ใน loop เมื่อถูกทำงานจะจบ loop
//continue; ใน loop เมื่อถูกทำงานจะจบรอบนั้นทันที ให้ไปรอบถัดไปเลย
 
for(let x = 1; x <= 5; ++x){
    if(x == 3){
        break;
    }
    console.log(x, 'DTI')
}
console.log('------------------')
for(let y = 1; y <= 5; ++y){
    if(y == 3){
        continue;
    }
    console.log(y, 'DTI')
}
 