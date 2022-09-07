fetch("https://foodish-api.herokuapp.com/api/")
.then((resp) => resp.json())
.then((data) => { document.getElementById("food").src = data.image
    
})




const form6 = document.querySelector("#pizza-btn").addEventListener("click",function click(){
    alert(" HAWAIAN  PINAPPLE PIZZA READY ..BON APPETITE")
})

const form = document.querySelector("#pizza-btn-2").addEventListener("click",function click(){
    alert("MUSHROOM PIZZA READY ..BON APPETITE")
})

const form1 = document.querySelector("#pizza-btn-3").addEventListener("click",function click(){
    alert("PERI-PERI PIZZA READY ..BON APPETITE")
})
const form3 = document.querySelector("#pizza-btn-4").addEventListener("click",function click(){
    alert("VEGETABLE  PIZZA READY ..BON APPETITE")
})
const form4 = document.querySelector("#pizza-btn-5").addEventListener("click",function click(){
    alert("CHICKEN PIZZA READY ..BON APPETITE")
})
const form5 = document.querySelector("#pizza-btn-6").addEventListener("click",function click(){
    alert("BBQ PIZZA READY ..BON APPETITE")
})


const mit = document.getElementById("myra")

myra.addEventListener('submit',function(event){
    event.preventDefault()

    const firstname = document.getElementById('firstname').value

    console.log(firstname)

    const lastname = document.getElementById('lastname').value

    console.log(lastname)


    const subject = document.getElementById('subject').value

    alert(subject)
})
