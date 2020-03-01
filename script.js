function checkName(name) {
  let nameIn = document.getElementById(name).value;
  if (document.getElementById(name).value === "Tim") {
    alert("Roses are red, Violets are blue, I love " + nameIn + " and he loves me too!");
  } else {
    alert("I'm sorry, " + nameIn + ", but your wife didn't make you a website for Valentine's Day.");
  };
}
