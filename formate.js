let card = document.querySelectorAll(".card")
let btn = document.querySelectorAll(".submit")

let output = document.querySelectorAll("p")



card.forEach(card => {
    card.addEventListener('click', () => {
        removeclass()
        card.classList.add('active')



    })
})


function removeclass() {
    card.forEach(card => {
        card.classList.remove('active')
    })
}


for (t of btn) {
    t.addEventListener('click', check)
    // console.log(t)
}

let inpt1 = document.getElementById("11")
let inpt2 = document.getElementById("12")
let inpt3 = document.getElementById("13")
let inpt4 = document.getElementById("14")
let inpt5 = document.getElementById("15")





function check(e) {

    // console.log(inpt1.value.toUpperCase() == ans1)
 

    let ans1 = "ELEPHANT"
    let ans2 = "TIGER"
    let ans3 = "LION"
    let ans4 = "HORSE"
    let ans5 = "WOLF"
    


    let animal_id = e.target.id
    // console.log(animal_id)
    btn[animal_id-1].disabled = true
    // console.log(btn[animal_id])
    // console.log(animal)
    let win = animal_id-1
    
   
    
    

    if (animal_id == 1) {

        // console.log(userans1)
        
        if(inpt1.value.toUpperCase() == ans1){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans1})`
        }
    }

    if (animal_id == 1) {

        // console.log(userans1)
        
        if(inpt1.value.toUpperCase() == ans1){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans1})`
        }
    }

    
    if (animal_id == 2) {

        // console.log(userans1)
        
        if(inpt2.value.toUpperCase() == ans2){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans2})`
        }
    }

    if (animal_id == 3) {

        // console.log(userans1)
        
        if(inpt3.value.toUpperCase() == ans3){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans3})`
        }
    }

    if (animal_id == 4) {

        // console.log(userans1)
        
        if(inpt4.value.toUpperCase() == ans4){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans4})`
        }
    }

    if (animal_id == 5) {

        // console.log(userans1)
        
        if(inpt5.value.toUpperCase() == ans5){
            
            output[win].innerHTML = `(Your Ans is Correct)`
        }
        else{
            output[win].innerHTML = `(Your Ans is Wrong , Right Ans is ${ans5})`
        }
    }

  




}
