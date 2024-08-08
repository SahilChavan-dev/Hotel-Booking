let media_icon = document.querySelector(".media-icon");
let slidebar = document.querySelector("#slidebar");
let close_icon = document.getElementById("close");
const body = document.querySelector("body");

media_icon.onclick = () => {
   body.classList.add("active");
   document.getElementById("media-icon").style.display = "none";
   document.getElementById("close").style.display = "block";
}
close_icon.onclick = () => {
   body.classList.remove("active");
   document.getElementById("media-icon").style.display = "block";
   document.getElementById("close").style.display = "none";
}