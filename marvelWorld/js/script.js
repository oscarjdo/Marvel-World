let btnLatestFilmCollapsed = document.getElementById("btn-new-latest-film");

btnLatestFilmCollapsed.addEventListener("click",()=>{
    let lastLatestFilm = document.querySelector(".last-latest-film");
    let element = document.getElementById("container-latest-film");
    let latestFilmCollapsed = document.querySelectorAll(".new-latest-film");
    let fragmento = document.createDocumentFragment();
    for (item of latestFilmCollapsed){
        fragmento.appendChild(item);
    }
    element.appendChild(fragmento);
    lastLatestFilm.classList.remove("d-none");
    document.getElementById("container-btn-new-latest-film").remove();
})