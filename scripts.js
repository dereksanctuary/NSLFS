/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// dataset: this is an array of hike objects
let hikes = [
  {
    name: "Sturtevant Falls",
    difficulty: "Moderate",
    distance: "3.5 Miles",
    location: "Angeles National Forest",
    image: "images/sturvenant.JPG"
  },
  {
    name: "Hondo Canyon: Backbone Trail",
    difficulty: "Hard",
    distance: "7 Miles",
    location: "Topanga State Park",
    image: "images/hondacanyontrail.JPG"
  },
  {
    name: "Mount Islip",
    difficulty: "Hard",
    distance: "10 Miles",
    location: "Angeles National Forest",
    image: "images/mt islip.JPG"
  },
  {
    name: "Catalina Trail & Gnatcher Loop",
    difficulty: "Moderate",
    distance: "2 Miles",
    location: "Shoreline Park",
    image: "images/pv loop.JPG"
  },
  {
    name: "Sandstone Peak",
    difficulty: "Moderate",
    distance: "3 Miles",
    location: "Santa Monica Mountains National Recreation Area",
    image: "images/sandstone peak.JPG"
  },
  {
    name: "Escondido Falls",
    difficulty: "Moderate",
    distance: "4 Miles",
    location: "Escondido Canyon Park",
    image: "images/escondido.JPG"
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.


// this function adds cards to the page to display the data in the array
function showCards(hikeList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < hikeList.length; i++) {
    let hike = hikeList[i];

    const nextCard = templateCard.cloneNode(true); // copy the template card
    editCardContent(nextCard, hike); // edit hike
    cardContainer.appendChild(nextCard); // add new card to the container
  }
}

// fills one cloned card with the correct hike data
function editCardContent(card, hike) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = hike.name;

  const cardImage = card.querySelector("img");
  cardImage.src = hike.image;
  cardImage.alt = hike.name;

  const bulletPoints = card.querySelectorAll("li");
  bulletPoints[0].textContent = "Difficulty: " + hike.difficulty;
  bulletPoints[1].textContent = "Distance: " + hike.distance;
  bulletPoints[2].textContent = "Location: " + hike.location;
}

// this function updates the displayed hikes based on search and filter
function updateHikes() {
  const searchInput = document.getElementById("search-input");
  const difficultyFilter = document.getElementById("difficulty-filter");

  const searchText = searchInput.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value;

  let filteredHikes = [];

  for (let i = 0; i < hikes.length; i++) {
    let hike = hikes[i];

    // check if each hike matches the selected difficulty or allow all if all is selected
    const matchesSearch = hike.name.toLowerCase().includes(searchText);
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      hike.difficulty.toLowerCase() === selectedDifficulty;

    if (matchesSearch && matchesDifficulty) {   //a condition
      filteredHikes.push(hike);  
    }
  }

  showCards(filteredHikes);
}

// this waits until the page is loaded, then sets everything up
// and attaches search/filter event listeners
document.addEventListener("DOMContentLoaded", function () {
  showCards(hikes);

  const searchInput = document.getElementById("search-input");
  const difficultyFilter = document.getElementById("difficulty-filter");

  searchInput.addEventListener("input", updateHikes);
  difficultyFilter.addEventListener("change", updateHikes);
});