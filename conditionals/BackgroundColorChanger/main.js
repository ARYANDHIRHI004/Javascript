//Using if else conditional statement


const buttons = document.querySelectorAll(".btns");
const body = document.getElementsByTagName("body")[0];

console.log(body);

Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    const getButtons = e.target
    console.log(e);
    
        if (getButtons.innerHTML === "Green") {
            body.style.backgroundColor = "green"
        }
        else if (getButtons.innerHTML === "Red") {
            body.style.backgroundColor = "Red"
        }
        else if (getButtons.innerHTML === "Blue") {
            body.style.backgroundColor = "Blue"
        }
        else if (getButtons.innerHTML === "Yellow") {
            body.style.backgroundColor = "yellow"
        }
        else{
            body.removeAttribute("style")
        }

  });
});
