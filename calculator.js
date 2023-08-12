const form = document.querySelector("form")
const buttons = document.querySelector(".buttons")
const sign = document.querySelector(".sign")
const answer = document.querySelector(".answer")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")

buttons.addEventListener("click", e =>{
    if(e.target.innerText === "+"){
        sign.innerText = "+"
    }else if(e.target.innerText === "-"){
        sign.innerText = "-"
    }else if(e.target.innerText === "x"){
        sign.innerText = "x"
    }else if(e.target.innerText === "/"){
        sign.innerText = "/"
    }
})

const calculate = (a,b)=>{
  if(sign.innerText === "+"){
    answer.innerText = parseFloat(a.innerText) + parseFloat(b.innerText)
  }else if(sign.innerText === "-"){
    answer.innerText = parseFloat(a.innerText) - parseFloat(b.innerText)
  }else if(sign.innerText === "x"){
    answer.innerText = parseFloat(a.innerText) * parseFloat(b.innerText)
  }else if(sign.innerText === "/"){
    answer.innerText = parseFloat(a.innerText) / parseFloat(b.innerText)
  }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    calculate(num1, num2)
})