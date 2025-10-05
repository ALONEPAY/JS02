//Call back Function/Function Call Back
 
function showHello(){
    console.log('Hello...')
}
 
const hi = () =>{
    return 'Hi...'
}
 
function wow(p1, p2, p3, p4){
    console.log('----------------')
    console.log(p1)
    p2()
    console.log( p3() )
    p4()
    console.log('----------------')
}
 
wow("Sombat", showHello , hi, ()=>{ console.log('Ei ei')} )
