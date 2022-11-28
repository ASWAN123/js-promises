function displaytext(text){
    document.body.innerHTML = text
}
let x = new Promise((resolve , reject) =>{
    y = 1 ;
    
    if (y == 0){
        resolve("ok")
    }else {
        reject("not okay")
    }
});
x.then((value)=> {displaytext(value)} ,(error)=> {displaytext(error)}) ;


