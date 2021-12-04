const body = document.getElementById("body");
const paragraphs = document.getElementsByClassName("paragraph");
const btn = document.getElementById("btn");


const addParagraphs = () => {
  
  Array.prototype.forEach.call(paragraphs, (el) => {
    let node = document.createElement("P");
    node.innerHTML = el.innerHTML;

    body.insertBefore(node, btn);

    return body;

  })

}