// for counter.html
// let count = 0
// function incrementCount() {
//     let counter = document.getElementById("counter")
//     count += 1
//     counter.innerText = count
// }

// function decrementCount() {
//     let counter = document.getElementById("counter")
//     count -= 1
//     counter.innerText = count
// }

// function resetCount() {
//     let counter = document.getElementById("counter")
//     count = 0
//     counter.innerText = count
// }

// for excercise.html
// const counter = document.getElementById("add")
// const incrementButton = document.getElementById("incrementButton")

// incrementButton.addEventListener("click", () => {
//     count += 1
//     counter.innerText = count
// })

// for cars.html
let cars = ["ford", "corolla"]

function displayCars() {
    let carList = document.getElementById("carList");
    carList.innerHTML = ""
    cars.forEach((c) => {
        let div = document.createElement("div")
        let li = document.createElement("li")
        let button = document.createElement("button")
        let edit = document.createElement("button")

        button.textContent = "🗑️"
        edit.textContent = "✏️"

        button.addEventListener("click", () => {
            cars = cars.filter((car) => car !== c)
            displayCars()
        })

        edit.addEventListener("click", () => {
        let name = prompt ("Enter the new car name")
        if(name !== "") {
            cars[cars.indexOf(c)] = name
            displayCars()
            }
        })

        li.textContent = c
        
        div.append(li, button, edit)
        div.style.display = "flex"
        
        div.style.gap = "4px"
        carList.appendChild(div)
    })

    
}

displayCars()