const body = document.querySelector("#body");
const paragraphs = document.getElementsByClassName("paragraph");
const btnHitMe = document.querySelector("#btn");

const btnToggle = document.createElement("BUTTON");
const btnToggleText = document.createTextNode("Hide Image");
btnToggle.appendChild(btnToggleText);
body.appendChild(btnToggle);


(function () {
  Array.prototype.forEach.call(paragraphs, (el) => {
      
    const hr = document.createElement("HR");

    if (el.previousElementSibling.nodeName === "P") {
      body.insertBefore(hr, el);
    }
  
  });
})();


btnToggle.addEventListener("click", () => {
  const img = document.getElementsByTagName("img");
  
  for (let i = 0; i <= img.length; i++) {
    const element = img[i];
    
    if (element === undefined) {
      return;
    }

    const parent = element.parentNode;

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
  
  const arr = Array.prototype.forEach.call(paragraphs, (el) => {
    
    const node = document.createElement("P");
    const hr = document.createElement("HR");
    node.innerHTML = el.innerHTML;

    body.insertBefore(hr, btnHitMe);
    body.insertBefore(node, btnHitMe);

  });

  console.log(arr)
  return arr;

}

// console.log(addParagraphs)

// function move(from, to, arr) {
//   const newArr = [...arr];
//   const item = newArr.splice(from, 1)[0];
//   newArr.splice(to, 0, item);
//   return newArr;
// }
