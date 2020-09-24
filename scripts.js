
let tabs = document.querySelectorAll('.tabs ul li')
let boxes = document.querySelectorAll('.box')
let mammals = document.querySelectorAll('.mammal')
let birds = document.querySelectorAll('.bird')
let fish = document.querySelectorAll('.fish')
let amphibians = document.querySelectorAll('.amphibian')
let reptiles = document.querySelectorAll('.reptile')
let invertebrates = document.querySelectorAll('.invertebrate')

tabs.forEach((tab) => {
    tab.addEventListener('click',()=>{
        tabs.forEach((item) => {
            item.classList.remove('active')

        })
            tab.classList.add('active')

            let tabval = tab.getAttribute('data-tab')

            boxes.forEach((item) => {
                item.style.display = "none"
            })
            if(tabval == "mammal"){
                mammals.forEach((mammal) => {
                    mammal.style.display = "block";
                })
            }
            else if(tabval == "bird"){
                birds.forEach((bird) => {
                    bird.style.display = "block"
                })
            }
            else if(tabval == "fish"){
                fish.forEach((fish) => {
                    fish.style.display = "block"
                })
            }
            else if(tabval == "amphibian"){
                amphibians.forEach((amphibian) => {
                    amphibian.style.display = "block"
                })
            }
            else if(tabval == "reptile"){
                reptiles.forEach((reptile) => {
                    reptile.style.display = "block"
                })
            }
            else if(tabval == "invertebrate"){
                invertebrates.forEach((invertebrate) => {
                    invertebrate.style.display = "block"
                })
            }
            else{
                boxes.forEach((item) => {
                    item.style.display = "block"
                })
            }

            
    })
 
   
})