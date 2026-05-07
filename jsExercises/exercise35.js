


function chageImage() {

    const image = document.querySelector("#img");
    const url = prompt("enter image url")
    image.setAttribute('src', url);
    const color = prompt("enter desired border color");

    image.style.borderColor = color;
    image.style.borderStyle = "solid";
    image.style.borderWidth = "3px";

    const imagewidth = prompt("enter the width of the image in (pixel)")
    image.setAttribute('width', imagewidth)
    const imagehight = prompt("enter the high of the image in (pixel)")
    image.setAttribute('height', imagehight)
    const imageradius = prompt("enter image radius")
    image.style.borderRadius = imageradius + "px";

}