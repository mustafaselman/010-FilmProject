const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films")

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "" ){

        UI.displayMessages("Fill in all the blanks...","danger")

    } else {
        const newFilm = new Film(title, director, url); 
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film added successfully...","success");

    }

    UI.clearInputs(titleElement,urlElement,directorElement);



    e.preventDefault();
}
function deleteFilm(e) {
    if(e.target.id === "delete-film"){
       
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Deletion completed successfully...","success");
    
    }

}
function clearAllFilms() {
    if(confirm("Are you sure you want to delete all?")){

        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}



// const form = document.querySelector("#film-form");
// const titleElement = document.querySelector("#title");
// const directorElement = document.querySelector("#director");
// const urlElement = document.querySelector("#url");
// const cardbody = document.querySelectorAll(".card-body")[1];
// const clear = document.querySelector("#clear-films")

// const ui = new UI();

// const storage = new Storage();
// eventListeners();

// function eventListeners() {
//     form.addEventListener("submit",addFilm);
//     document.addEventListener("DOMContentLoaded",function(){
//         let films = storage.getFilmsFromStorage();
//         ui.loadAllFilms(films);
//     });
//     cardbody.addEventListener("click",deleteFilm);
//     clear.addEventListener("click",clearAllFilms);
// }
// function addFilm(e) {
//     const title = titleElement.value;
//     const director = directorElement.value;
//     const url = urlElement.value;

//     if (title === "" || director === "" || url === "" ){

//         ui.displayMessages("Fill in all the blanks...","danger")

//     } else {
//         const newFilm = new Film(title, director, url); 
//         ui.addFilmToUI(newFilm);
//         storage.addFilmToStorage(newFilm);
//         ui.displayMessages("Film added successfully...","success");

//     }

//     ui.clearInputs(titleElement,urlElement,directorElement);



//     e.preventDefault();
// }
// function deleteFilm(e) {
//     if(e.target.id === "delete-film"){
       
//         ui.deleteFilmFromUI(e.target);
//         storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
//         ui.displayMessages("Deletion completed successfully...","success");
    
//     }

// }
// function clearAllFilms() {
//     if(confirm("Are you sure you want to delete all?")){

//         ui.clearAllFilmsFromUI();
//         storage.clearAllFilmsFromStorage();
//     }
// }