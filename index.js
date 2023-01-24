const foodItems = [
    {
        name: "Poha", category: "BreakFast", calories: 158, junkfood: "No", img: "/img/breakfast/poha-img.webp"
    }, {
        name: "Mutton-keema", category: "MainCourse", calories: 234, junkfood: "No", img: "mutton-keema-img.webp"
    }, {
        name: "Noodles", category: "JunkFood", calories: 138, junkfood: "Yes", img: "Noodles-img.webp"
    }, {
        name: "Pizza", category: "JunkFood", calories: 266, junkfood: "Yes", img: "pizza-img.webp"
    }, {
        name: "Bun-maska", category: "BreakFast", calories: 197, junkfood: "No", img: "/img/breakfast/bun-maska-img.webp"
    }, {
        name: "Biryani", category: "MainCourse", calories: 301, junkfood: "No", img: "biryani.webp"
    }, {
        name: "Pancake", category: "BreakFast", calories: 227, junkfood: "No", img: "img/breakfast/pancake-img.webp"
    }, {
        name: "Burger", category: "JunkFood", calories: 301, junkfood: "Yes", img: "burger-img.webp"
    }
]

const foodItemsBF = foodItems.filter(p => p.category == "BreakFast")
const foodItemsJF = foodItems.filter(p => p.category == "JunkFood")
const foodItemsC300 = foodItems.filter(p => p.calories < 300)

const myContainer = document.querySelector(".myContainer")
let showInHtml = foodItems.map((project) => {
    return `
    <div class="food-item">
        <div>
            <img src="${project.img}" alt="Burger-Img">
        </div>
        <div>
            <p>Name: ${project.name}</p>
            <p>Category: ${project.category}</p>
            <p>Calories: ${project.calories}</p>
            <p>Junk Food: ${project.junkfood}</p>
        </div>
    </div>
    `
})
myContainer.innerHTML = showInHtml

const showInHtml1 = () => {
    showInHtml = foodItems.map((project) => {
        return `
        <div class="food-item">
            <div>
                <img src="${project.img}" alt="Burger-Img">
            </div>
            <div>
                <p>Name: ${project.name}</p>
                <p>Category: ${project.category}</p>
                <p>Calories: ${project.calories}</p>
                <p>Junk Food: ${project.junkfood}</p>
            </div>
        </div>`
    })
    myContainer.innerHTML = showInHtml

}
const showInHtml2 = () => {
    showInHtml = foodItemsBF.map((project) => {
        return `
        <div class="food-item">
            <div>
                <img src="${project.img}" alt="Burger-Img">
            </div>
            <div>
                <p>Name: ${project.name}</p>
                <p>Category: ${project.category}</p>
                <p>Calories: ${project.calories}</p>
                <p>Junk Food: ${project.junkfood}</p>
            </div>
        </div>`
    })
    myContainer.innerHTML = showInHtml
}
const showInHtml3 = () => {
    showInHtml = foodItemsJF.map((project) => {
        return `
        <div class="food-item">
            <div>
                <img src="${project.img}" alt="Burger-Img">
            </div>
            <div>
                <p>Name: ${project.name}</p>
                <p>Category: ${project.category}</p>
                <p>Calories: ${project.calories}</p>
                <p>Junk Food: ${project.junkfood}</p>
            </div>
        </div>`
    })
    myContainer.innerHTML = showInHtml
}
const showInHtml4 = () => {
    showInHtml = foodItemsC300.map((project) => {
        return `
        <div class="food-item">
            <div>
                <img src="${project.img}" alt="Burger-Img">
            </div>
            <div>
                <p>Name: ${project.name}</p>
                <p>Category: ${project.category}</p>
                <p>Calories: ${project.calories}</p>
                <p>Junk Food: ${project.junkfood}</p>
            </div>
        </div>`
    })
    myContainer.innerHTML = showInHtml
}
