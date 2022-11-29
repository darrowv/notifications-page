import notices from "./assets/notifications.js";

const markBtn = document.getElementById("mark-btn");
const notsCount = document.getElementById("nots-count");
const notsList = document.getElementById("nots-list");

markBtn.addEventListener("click", () => {
  notsCount.textContent = "0";

  // console.log(notsList)

  for(let notice of notsList.children) {
    if(notice.classList.contains("unread")) {
      notice.classList.remove("unread");
    }
  }
})

