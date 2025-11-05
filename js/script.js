let ajoute = document.getElementById("ajouter");
let selection = document.getElementById("selected1");
let selection2 = document.getElementById("selected2");
let commentaire = document.getElementById("comment");
let gris1 = document.getElementById("gris1")
let parent = document.getElementById("parent")
let error = document.getElementById("error")


ajoute.addEventListener("click", function () {

    let urgent = "";
    if (commentaire.value == "") {
        error.innerText = "Ajoute un commentaire";
    } else {
        error.innerText = "";
        if (selection.value == "Urgent") {
            urgent = `<i class=" m-2 text-danger fa-solid fa-triangle-exclamation"></i>`
        }
        parent.innerHTML += `
        
        <div class="postit1 p-2 m-3 mx-auto">
            <div class="text-end">
                <p class="croix mb-0"><i class="bi bi-x-octagon"></i></p>
            </div>
              <p class="h4 text-center">${urgent}${selection.value}</p>
            <p class="h4 text-center">${selection2.value}</p>
            <p class="h">${commentaire.value}</p>
            </div>
        </div>
`
    }

    commentaire.value = "";





});


