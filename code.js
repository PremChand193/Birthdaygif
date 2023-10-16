
function updateName() {
  var preferredName = prompt("Enter your name:");
  if (preferredName !== null && preferredName !== "") {
      var container = document.getElementById("birthdayname");
      container.innerHTML = "";
      for (var i = 0; i < preferredName.length; i++) {
          var character = preferredName.charAt(i);
          var paragraph = document.createElement("p");
          paragraph.innerText = character;
          container.appendChild(paragraph);
      }
  }
}
window.addEventListener('load', updateName);
