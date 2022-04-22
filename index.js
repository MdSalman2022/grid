const btn = document.querySelectorAll(".btn")

    btn.forEach(function(icon){

        icon.addEventListener("click", function(e){
            e.preventDefault;            
            icon.innerHTML += `<i class="fa-solid fa-heart"></i>`
            // icon.classList.add("loved");
        })
        
        })
      

