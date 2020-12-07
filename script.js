document.addEventListener("DOMContentLoaded", (e) => {
    
    console.log("loaded")

    let myHeaderShow = document.getElementById("header_id")

    setTimeout(() => {
        myHeaderShow.classList.remove("hidden")
    }, 3000)
})