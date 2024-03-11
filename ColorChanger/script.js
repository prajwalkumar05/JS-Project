

const colorDisplay = document.getElementById("display");
// // const btn = document.getElementById("btn");
// const btn = document.getElementsByClassName("btn")
// const first=btn[0]

const btn = document.querySelector(".btn")



console.log(btn)

const color=["#e64980","#d6336c","#9c36b5","#4263eb","#0ca678","#74b816"]

const guessColor = () =>{
    console.log(Math.random())
    // console.log(Math.floor(Math.random() * color.length) )
    return color[Math.floor(Math.random() * color.length)];
    
}

const change = () =>{
    console.log("hii")
    const getcolor = guessColor()
    document.body.style.backgroundColor=getcolor
    colorDisplay.textContent=`Background Color ${getcolor}`
}



btn.addEventListener('click',change)