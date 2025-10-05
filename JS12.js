//function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ call function
//เราจะเรียกใช้ function ที่ไหน เมื่อไหร่ กี่ครั้งก็ได้
 
//parameter คือ ตัวแปรประเภทประหนึ่งใช้ได้เฉพาะใน function โดยจะเขียนอยู่ใน ( ) หลังชื่อฟังกชัน
//return คือ คำสั่ง ที่มี 2 ความหมาย คือ 1. เป็นการบอกว่าจบการทำงานของฟังก์ชัน 2. ส่งค่ากลับไปยังจุดเรียกใช้ฟังก์ชัน
 
//มี 4 รูปแบบใหญ่ๆ
//1. no parameter, no return
function  showHello( ){
    console.log('Hello...')
}
 
function showHi( ){
    console.log("Hi...")
}
 
showHello() //call function
showHi()
showHello()
showHello()
 