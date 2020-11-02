const ferretPic = document.getElementById("ferretpic");
const bigButton = document.getElementById("bigbutton");
const smallButton = document.getElementById("smallbutton");
const moveButtonR = document.getElementById("movebuttonR");
const moveButtonL = document.getElementById("movebuttonL");
const reset = document.getElementById("reset");

const getDims = () => ferretPic.getBoundingClientRect();

let picInfo = getDims();

bigButton.addEventListener("click", function () {
  ferretPic.height = ferretPic.height + 10;
});
smallButton.addEventListener("click", function () {
  ferretPic.height = ferretPic.height - 10;
});
moveButtonR.addEventListener("click", function () {
  picInfo.x = picInfo.x + 10;
  ferretPic.style = `margin-left: ${picInfo.x}px`;
});
moveButtonL.addEventListener("click", function () {
  picInfo.x = picInfo.x - 10;
  ferretPic.style = `margin-left: ${picInfo.x}px`;
});
reset.addEventListener("click", function () {
  ferretPic.style = "margin-left: 0";
  ferretPic.height = 150;
  picInfo = getDims();
});
