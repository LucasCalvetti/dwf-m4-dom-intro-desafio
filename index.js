const cosasQueAprendimos = [
    {
        tema: "terminal",
        class: "",
    },
    {
        tema: "node",
        class: "",
    },
    {
        tema: "oop",
        class: "",
    },
    {
        tema: "typescript",
        class: "",
    },
    {
        tema: "css",
        class: "",
    },
    {
        tema: "dom",
        class: "special",
    },
];

function main() {
    const liEls = document.querySelectorAll(".lista li");
    for (let el of liEls) {
        el.remove();
    }
    const ul = document.querySelector(".lista");
    cosasQueAprendimos.forEach((item) => {
        let newLi = document.createElement("li");
        newLi.textContent = item.tema;
        newLi.className = item.class;
        ul.appendChild(newLi);
    });
}

main();
