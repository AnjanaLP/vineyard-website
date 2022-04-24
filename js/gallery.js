document.addEventListener("DOMContentLoaded", () => {
  activateGallery();
});

const activateGallery = () => {
  const galleryThumbs = document.querySelectorAll(".gallery-thumbs > div > img");
  galleryThumbs.forEach( (galleryThumb) => {
    galleryThumb.addEventListener("click", () => {
      setImage(galleryThumb);
      setBoxShadow(galleryThumb);
      setImageInfo(galleryThumb);
    });
  });
}

const setImage = (galleryThumb) => {
  const mainImage = document.querySelector("#large-image");
  mainImage.setAttribute("src", galleryThumb.src);
  mainImage.setAttribute("alt", galleryThumb.alt);
}

const setBoxShadow = (galleryThumb) => {
  document.querySelector(".selected-image").classList.remove("selected-image");
  galleryThumb.parentNode.classList.add("selected-image");
}

const setImageInfo = (galleryThumb) => {
  const imageInfo = document.querySelector("#description");
  imageInfo.innerHTML = galleryThumb.dataset.description;
}
