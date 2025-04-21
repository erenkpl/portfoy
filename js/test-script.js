const form = document.getElementById("comment-form");
const grid = document.getElementById("commentsGrid");

window.addEventListener("DOMContentLoaded", () => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.forEach(addCommentToGrid);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isim = form.elements["isim"].value;
    const yorum = form.elements["yorum"].value;

    const newComment = {isim, yorum};

    const currentComments = JSON.parse(localStorage.getItem("comments"))
    currentComments.push(newComment);

    localStorage.setItem("comments", JSON.stringify(currentComments));

    addCommentToGrid(newComment);

    form.reset();
});

function addCommentToGrid({isim, yorum}){
    const div = document.createElement("div");
    div.classList.add("comment-card");
    div.innerHTML = `<h4>${isim}</h4> <p>${yorum}</p>`;
    grid.prepend(div);
}