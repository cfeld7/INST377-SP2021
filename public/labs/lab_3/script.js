/* Put your javascript in here */
const listContainer = document.querySelector(".images");

function shiftLeft() {
    const last = Array.from(listContainer.children).slice(4,7).reverse();
    last.forEach((element) => {
        listContainenr.removeChild(element);
        listContainer.insertBefore(element, listContainer.children[0]);
    });
}


function goRight() {
    const first = Array.from(listContainer.children).slice(1, 3)
    first.forEach((element) => {
        listContainer.removeChild(element);
        listContainer.appendChild(element);
    });
}

function LoadPage(){
    document.querySelector("button.arrow.prev").addEventListener("click", (event) => (
        goLeft();
    });
    document.querySelector("button.arrow.next").addEventListener("click", (event) => (
        goRight();
    });
}
window.onload = LoadPage;