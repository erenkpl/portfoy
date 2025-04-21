const form = document.getElementById("comment-form");
const grid = document.getElementById("commentsGrid");

window.addEventListener("DOMContentLoaded", () => {
    const storedComments = JSON.parse(localStorage.getItem("comments"))
    storedComments.forEach(addCommentToGrid);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const comment = form.elements["comment"].value;

    const newComment = {name, comment};

    const currentComments = JSON.parse(localStorage.getItem("comments"))
    currentComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(currentComments));

    addCommentToGrid(newComment);
    form.reset();
});

function addCommentToGrid({name, comment}){
    const div = document.getElementById("div");
    div.classList.add("comment-card");
    div.innerHTML = `<h4>${name}</h4> <p>${comment}</p>`;
    grid.prepend(div);
}