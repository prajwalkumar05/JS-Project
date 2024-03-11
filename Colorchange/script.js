console.log("hello")

const boxs = document.querySelectorAll(".box") 

console.log(boxs)


boxs.forEach((singleBox) =>{
    singleBox.addEventListener("click",() =>{

        if(singleBox.classList.contains("active")){
            singleBox.classList.remove("active")
        }
        else{
            const getselected = document.querySelectorAll(".active")
            
            getselected.forEach((single) =>{
                single.classList.remove("active")
            })

            singleBox.classList.add("active")
        }
        
        
    })
})