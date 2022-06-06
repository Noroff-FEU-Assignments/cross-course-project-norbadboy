const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get("id");
const movieUrl = `https://student-noroff.one/CrossCourse/wp-json/wc/store/products/${movieId}`;
console.log(movieUrl);

const movieBreadcrumb = document.querySelector(".movie-page--breadcrumb");
const moviePageLoading = document.querySelector(".movie-page--loading");
const moviePageContainer = document.querySelector(".movie-page--container");
const movieIntroImage = document.querySelector(".movie-page--image");
const movieIntroTitle = document.querySelector(".movie-page--title");
const movieIntroInfo = document.querySelector(".movie-page--movie-info");

async function getMovieById() {
  try {
    const response = await fetch(movieUrl);
    const movieInfo = await response.json();
    console.log(movieInfo);

    movieBreadcrumb.innerText = `Home / Film-list / ${movieInfo.name}
    `;
    movieIntroImage.innerHTML = `<img src=${movieInfo.images[0].src} alt=${movieInfo.images[0].alt} />
    `;

    movieIntroTitle.innerText = movieInfo.name;
    movieIntroInfo.innerText = movieInfo.short_description;

    moviePageLoading.style.display = "none";
    moviePageContainer.style.display = "flex";
  } catch (error) {
    console.log("An error occured", error);
  }
}

getMovieById();
