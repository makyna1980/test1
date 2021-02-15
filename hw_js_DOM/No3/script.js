let b = document.createElement("button");
b.innerHTML = "Нажми меня"
b.setAttribute("onclick", "setColor()")

document.body.append(b)

function setColor() {
    let circle = document.getElementsByTagName('div');
    let color = ["red", "yellow", "green"];
    let shine = 0;

    for (let i = 0; i < circle.length; i++) {
        if (circle[i].style.background != "white") {
            shine = i;
            break;
        }
    }
    circle[shine].style.background = "white";

    if (shine == 2) {
        shine = 0;
        circle[shine].style.background = color[shine];
    }
    else {
        shine = shine + 1;
        circle[shine].style.background = color[shine];
    }
}