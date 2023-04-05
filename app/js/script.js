// camps data
const data = [
  {
    id: 0,
    image: "./assets/Camp Images/Compressed Images/Mount Ulap.jpg",
    campName: "Mount Ulap",
    price: "$104.99",
    description:
      "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
  },
  {
    id: 1,
    image: "./assets/Camp Images/Compressed Images/Calaguas Island.jpg",
    campName: "Calaguas Islands",
    price: "$68.74",
    description:
      "A paradise of islands that can rival the white sand beauty of Boracay.",
  },
  {
    id: 2,
    image: "./assets/Camp Images/Compressed Images/Onay Beach.jpg",
    campName: "Onay Beach",
    price: "$98.04",
    description:
      " This is one of the best beach camping sites, beautiful and pristine.",
  },
  {
    id: 3,
    image: "./assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg",
    campName: "Seven Sisters Waterfall",
    price: "$100.00",
    description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
  },
  {
    id: 4,
    image: "./assets/Camp Images/Compressed Images/Latik Riverside.jpg",
    campName: "Latik Riverside",
    price: "$40.04",
    description:
      "Philippines is one of the most dazzling countries in all of Asia.",
  },
  {
    id: 3,
    image: "./assets/Camp Images/Compressed Images/Buloy Springs.jpg",
    campName: "Buloy Springs",
    price: "$78.56",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
];

// displaying the camps dynamically
const campContainer = document.querySelector(".camps");
const html = data
  .map((camp) => {
    return `
        <div class="camp">
            <div class="camp__image">
              <img
                src="${camp.image}"
                alt="camp image"
              />
            </div>
            <h4 class="camp__title">${camp.campName}</h4>
            <p class="camp__description">
            ${camp.description}
            </p>
            <a
              href="./individualCampground.html"
              class="btn btn-secondary camp__btn"
              >View Campground</a
            >
          </div>
        `;
  })
  .join("");
campContainer.innerHTML = html;

// filtering the camps as per user input
const camps = Array.from(document.querySelectorAll(".camp"));
const searchForm = document.forms.search;
const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
const campsName = data.map((camp) => {
  return camp.campName;
});

let notice = document.createElement("div");
notice.classList.add("notice");
notice.textContent = "No campgrounds found";

searchInput.addEventListener("input", searchCamp);
searchBtn.addEventListener("click", searchCamp);

function searchCamp() {
  camps.forEach((camp) => camp.classList.remove("hidden"));
  notice.remove();
  campContainer.classList.remove("hidden");

  let searchText = searchForm.elements["search__input"].value.toLowerCase();

  let count = 0;
  for (i = 0; i < campsName.length; i++) {
    if (!campsName[i].toLowerCase().includes(searchText)) {
      camps[i].classList.add("hidden");
      count++;
    }
  }

  if (count === campsName.length) {
    campContainer.before(notice);
    campContainer.classList.add("hidden");
  }
}

//mobile navigation
const menuBtn = document.querySelector(".menu--icon");
const closeBtn = document.querySelector(".close--icon");
const mobileNav = document.querySelector(".mobile-navigation");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  mobileNav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  mobileNav.style.display = "none";
});
