let submit = document.querySelector(".submit");

let message = document.querySelector(".message");

let randomNumber = Math.floor(Math.random() * 100);
submit.addEventListener("click", () => {
    let input = document.querySelector("#guess").value;
    if (input == randomNumber) {
        message.innerHTML = `Congratulations You guessed right, your number is ${randomNumber} 💪🏻`;
    } else if (input < randomNumber) {
        message.innerHTML = "❗ You should increase the number ❗";
    } else if (input > randomNumber) {
        message.innerHTML = "❗ You should reduce the number ❗";
    }
})