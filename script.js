// If you want to build our notifications list using DOM only uncomment 
// everything commented in this file and comment notsList variable which I marked

// import notices from "./assets/notifications.js";

const markBtn = document.getElementById("mark-btn");
const notsCount = document.getElementById("nots-count");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const notsList = document.getElementById("nots-list");
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const card = document.getElementById("card");
// const notsList = document.createElement("ul");
// notsList.className = "card__list";

// for(let notice of notices) {
//   const listItem = document.createElement("li");
//   listItem.className = "card__list__item";
//   if(notice.status === "unread") {
//     listItem.classList.add("unread")
//   }
  
//   // adding avatar
//   const avatar = document.createElement("img");
//   avatar.src = notice.img;
//   avatar.alt = notice.name;
//   listItem.append(avatar);

//   // adding name, date & action
//   const itemDataDiv = document.createElement("div");
//   itemDataDiv.className = "item__data";
//   const dataDivMain = document.createElement("p");
//   dataDivMain.className = "data__main";
//   const time = document.createElement("span");
//   time.className = "data__time";
//   time.textContent = notice.date + " ago";
//   const name = document.createElement("span");
//   name.className = "name";
//   name.textContent = notice.name;
//   const action = document.createElement("span");
//   action.className = "action";
//   action.textContent = notice.action;
//   dataDivMain.append(name, action)
//   itemDataDiv.append(dataDivMain, time)

//   //adding other properties if there are any
//   if(notice.hasOwnProperty("subject")) {
//     const subject = document.createElement("span");
//     subject.className = "subject";
//     subject.textContent = notice.subject;
//     dataDivMain.append(subject);
//   }

//   if(notice.hasOwnProperty("message")) {
//     const message = document.createElement("p");
//     message.className = "message";
//     message.textContent = notice.message;
//     itemDataDiv.append(message);
//   }

//   listItem.append(itemDataDiv)

//   if(notice.hasOwnProperty("picture")) {
//     const pictureDiv = document.createElement("div");
//     pictureDiv.className = "picture";
//     const picture = document.createElement("img");
//     picture.src = notice.picture;
//     picture.alt = "commented photo";
//     pictureDiv.append(picture);
//     listItem.append(pictureDiv);
//   }

//   notsList.append(listItem);
// }
// card.append(notsList);

markBtn.addEventListener("click", () => {
  notsCount.textContent = "0";

  for(let notice of notsList.children) {
    if(notice.classList.contains("unread")) {
      notice.classList.remove("unread");
    }
  }
})