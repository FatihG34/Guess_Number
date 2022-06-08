let input = document.querySelector("#guess");
let submit = document.querySelector(".submit");
let message = document.querySelector(".message");
let message1 = document.querySelector(".guess_label");

window.onload = () => {
    input.focus();
};


let randomNumber = Math.floor(Math.random() * 100);
let hak = 7;
submit.addEventListener("click", () => {
    let input = document.querySelector("#guess").value;
    if (!input) {
        message.innerHTML = "You Must Enter A Number to Play";
        // alert("You must enter a number to play")
    } else {
        if (hak > 0) {
            if (input == randomNumber) {
                message.innerHTML = `Congratulations You guessed right, your number is ${randomNumber} 💪🏻`;
            } else if (input < randomNumber) {
                message.innerHTML = `❗ Change Your Choose and Enter a Number Between ${input} and 100. ❗`;
                hak--;
                document.querySelector("div").style.backgroundColor = "orange";
                document.querySelector("body").style.backgroundColor = "blue";
                message1.innerHTML = hak == 0
                    ? `You are lost, ${input} is not correct`
                    : `You have ${hak} attempts left `;
            } else if (input > randomNumber) {
                message.innerHTML = `❗ Change Your Choose and Enter a Number Between 0 and ${input}. ❗`;
                hak--;
                document.querySelector("div").style.backgroundColor = "red"
                document.querySelector("body").style.backgroundColor = "black"
                message.style.color = "black"
                message1.style.color = "black"
                message1.innerHTML = hak == 0
                    ? `You are lost, ${input} is not correct`
                    : `You have ${hak} attempts left `;
            }
        }
    }
})

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        submit.click();
    }
});