const body = document.querySelector("#body");
const paragraphs = document.getElementsByClassName("paragraph");
const btn = document.querySelector("#btn");
const img = document.getElementsByClassName("img");

const btnToggle = document.createElement("BUTTON");
const btnToggleText = document.createTextNode("Hide Image");
btnToggle.appendChild(btnToggleText);
body.appendChild(btnToggle)

btnToggle.addEventListener("click", (e) => {
  const im = document.getElementsByTagName("img");
  
  for (let i = 0; i <= im.length; i++) {
    const element = im[i];
    
    if (element === undefined) {
      return;
    }

    const parent = element.parentNode

    if (parent.style.display === "none") {
      parent.style.display = "block";
      parent.previousElementSibling.style.display = "block";
      btnToggle.textContent = "Hide Image";
    } else {
      parent.style.display = "none";
      parent.previousElementSibling.style.display = "none";
      btnToggle.textContent = "Show Image";
    }

  }
  
})

const addParagraphs = () => {
  
  Array.prototype.forEach.call(paragraphs, (el) => {
    
    const node = document.createElement("P");
    const hr = document.createElement("HR");
    node.innerHTML = el.innerHTML;

    body.insertBefore(hr, btn);
    body.insertBefore(node, btn);

  })

}






// Note
// const addParagraphs = () => {
  
//   Array.prototype.forEach.call(paragraphs, (el) => {
    
//     // For btn
//     if (el.contains(img)) {
//       const node = document.createElement("P");
//       const hr = document.createElement("HR");

//       const btnNode = document.createElement("BUTTON");
//       const btnTextNode = document.createTextNode("Toggle");
//       btnNode.appendChild(btnTextNode);

//       node.innerHTML = el.innerHTML;
//       node.appendChild(btnNode)

//       body.insertBefore(hr, btn);
//       body.insertBefore(node, btn);

//       btnNode.addEventListener("click", (e) => {
//         console.log(btnNode.parentNode.parentNode);
//         const pa = btnNode.parentNode;
//         body.removeChild(pa)
//       })

//     } else {
//       const node = document.createElement("P");
//       const hr = document.createElement("HR");
//       node.innerHTML = el.innerHTML;

//       body.insertBefore(hr, btn);
//       body.insertBefore(node, btn);
//     }

//   })

// }
