function checkName(name) {
    let nameIn = document.getElementById(name).value;
    nameCheck = nameIn.toUpperCase();
    if (nameCheck === "TIM") {
        alert(
            "Roses are red, Violets are blue, I love Tim and he loves me too!"
        );
    } else if (nameCheck === "") {
        alert("Please enter your name!");
    } else {
        alert(
            "I'm sorry, " +
                nameIn +
                ", but your wife didn't make you a website for Valentine's Day."
        );
    }
}
