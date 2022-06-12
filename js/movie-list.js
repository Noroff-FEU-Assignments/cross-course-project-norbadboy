const moviesUrl = "https://student-noroff.one/CrossCourse/wp-json/wc/store/products";

const moviesListContainer = document.querySelector(".movie-list");

async function fetchMovies() {
  try {
    const response = await fetch(moviesUrl);
    const results = await response.json();

    moviesListContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      moviesListContainer.innerHTML += `
      <div class="card-content">  
      <div class="title">${results[i].name}</div>
      <a href="movie-page.html?id=${results[i].id}">
              <img src=${results[i].images[0].src} alt=${results[i].images[0].alt} />
            </a>
      </div>
      `;
    }
  } catch (error) {
    console.log("An error occured", error);
    moviesListContainer.innerHTML = displayError("An error occured when calling the API");
  }
}
fetchMovies();
