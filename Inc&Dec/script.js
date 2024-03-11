const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");

const counter = document.getElementById("counter");

let counterValue = 0

const textColor = () =>{
    if(counterValue > 0){
        counter.style.color="green"
    }
    else if(counterValue === 0){
        counter.style.color="black"
    }
    else{
        counter.style.color="red"
    }
}

dec.addEventListener("click", () => {
  console.log("hii");

  counterValue--

  counter.textContent=counterValue
  textColor()


});

reset.addEventListener("click", () => {
    console.log("hii");

    counterValue =0

  counter.textContent=counterValue
  textColor()
});

inc.addEventListener("click", () => {
    console.log("hii");

    counterValue++

  counter.textContent=counterValue
  textColor()
});



