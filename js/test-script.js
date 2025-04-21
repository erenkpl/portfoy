const form = document.getElementById("comment-form");
const grid = document.getElementById("commentsGrid");

function getComments(){
    let storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    return storedComments;
}

function saveComments(setComments){
    localStorage.setItem("comments", JSON.stringify(setComments));
}

window.addEventListener("DOMContentLoaded", () => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.forEach(addCommentToGrid);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isim = form.elements["isim"].value;
    const yorum = form.elements["yorum"].value;

    const newComment = {isim, yorum, likes: 0};

    const currentComments = getComments();
    currentComments.push(newComment);

    saveComments(currentComments);

    addCommentToGrid(newComment);

    form.reset();
});

function addCommentToGrid(comment){
    const {isim, yorum, likes} = comment;

    const div = document.createElement("div");
    div.classList.add("comment-card");
    div.innerHTML = `<h4>${isim}</h4> <p>${yorum}</p> <button class="like-butonu">❤️ ${likes}</button> <button class="delete-butonu">🗑️</button>`;

    // Delete Butonu
    const deleteButton = div.querySelector(".delete-butonu");
    deleteButton.addEventListener("click", () =>{
        div.remove();

        let storedComments = getComments();
        storedComments = storedComments.filter(c => !(c.isim === comment.isim && c.yorum === comment.yorum));

        saveComments(storedComments);
    });

    // Beğeni Butonu
    const likeButton = div.querySelector(".like-butonu");
    likeButton.addEventListener("click", ()=> {
        comment.likes += 1;
        likeButton.textContent = `❤️ ${comment.likes}`;

        const storedComments = getComments();
        const updatedComments = storedComments.map(c => {
            if (c.isim === comment.isim && c.yorum === comment.yorum){
                return { ...c, likes: comment.likes};
            }
            return c;
        });

        saveComments(updatedComments);

    });

    grid.prepend(div);
}