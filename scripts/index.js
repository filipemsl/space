var userPictures = document.querySelector(".scrollmenu");
var productPictures = document.querySelector(".scrollProduct");

function automaticScroll() {
  if (userPictures.scrollLeft == 0) {
    userPictures.scrollLeft += 9000;
  } else if (userPictures.scrollLeft > 0) {
    userPictures.scrollLeft -= 9000;
  }
  if (productPictures.scrollLeft == 0) {
    productPictures.scrollLeft += 9000;
  } else if (productPictures.scrollLeft > 0) {
    productPictures.scrollLeft -= 9000;
  }
}

window.onload = function () {
  setInterval(function () {
    automaticScroll();
  }, 5000);
};
