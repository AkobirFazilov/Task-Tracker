let trackerContent = document.querySelector(".tracker-content");
let input = document.querySelector(".input");
let enter = document.querySelector(".enter");

enter.addEventListener("click", () => {
  let trackerItem = document.createElement("div");
  let trackerItemCheck = document.createElement("div");
  let trackerItemText = document.createElement("div");
  let trackerItemDelete = document.createElement("div");

  trackerItem.className = "trackerItem";
  trackerItemCheck.className = "trackerItemCheck";
  trackerItemText.className = "trackerItemText";
  trackerItemDelete.className = "trackerItemDelete";

  trackerContent.appendChild(trackerItem);

  trackerItem.appendChild(trackerItemCheck);
  trackerItem.appendChild(trackerItemText);
  trackerItem.appendChild(trackerItemDelete);

  trackerItemDelete.innerHTML = "&#10008";

  trackerItemText.innerHTML = input.value;

  trackerItemCheck.addEventListener("click", () => {
    if (trackerItemCheck.style.backgroundColor === "rgb(205, 205, 205)") {
      trackerItemCheck.style.backgroundColor = "white";
      trackerItemText.style.textDecoration = "none";
      trackerItemText.style.color = "black";
      trackerItem.remove();
      trackerContent.prepend(trackerItem);
    } else {
      trackerItemCheck.style.backgroundColor = "rgb(205, 205, 205)";
      trackerItemText.style.textDecoration = "line-through";
      trackerItemText.style.color = "rgb(205, 205, 205)";
      trackerItem.remove();
      trackerContent.appendChild(trackerItem);
    }
  });

  trackerItemDelete.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  input.value = "";
});
