document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscar")){

        document.querySelectorAll(".card").forEach(local=>{

            local.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?local.classList.remove("filtro")
            :local.classList.add("filtro")
        })

    }

})