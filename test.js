window.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    
    document.getElementById("lol").addEventListener("click", clickCount);
    
//    clickCount(count)
    
    function clickCount(){
        console.log(count)
       count += 1;
        let clickCount ="times";
        if (count > 1){ 
            clickCount ="times";
        } else {
            clickCount = "time";
        };
        
    
        document.getElementById("lol").textContent = "You have clicked " + count + " " + clickCount;
    }
    

})