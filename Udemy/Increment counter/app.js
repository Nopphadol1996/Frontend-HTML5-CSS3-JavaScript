const conters = document.querySelectorAll(".counter")

conters.forEach(conter => {
    conters.innerText='0'
    const updateCounter = () => {
        const target = +conter.getAttribute("data-target")
        // console.log(typeof(target))
        const start =+ conter.innerText
        const increment = target / 200
        if(start < target){
            conter.innerText = `${Math.ceil(start + increment)}`
            setTimeout(updateCounter,1)
        }else{
            conter.innerText = target
        }
    }
    updateCounter()
})