//3. no parameter, has return
function showHello() {
  return "Hello....";
}
 
function showSmile() {
  console.log("SMILE");
  return "^_^";
}
 
function showSad() {
  console.log("SAD");
  return "T_T";
}
 
console.log( showHello() )
console.log( showSmile() )
let data = showSad()
console.log(data)