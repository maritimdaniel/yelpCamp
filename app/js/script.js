const data = [
  {
    id: 1,
    image: "./assets/Camp Images/Compressed Images/Mount Ulap.jpg",
    campName: "Mount Ulap",
    description:
      "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
  },
  {
    id: 2,
    image: "./assets/Camp Images/Compressed Images/Calaguas Island.jpg",
    campName: "Calaguas Islands",
    description:
      "A paradise of islands that can rival the white sand beauty of Boracay.",
  },
  {
    id: 3,
    image: "./assets/Camp Images/Compressed Images/Onay Beach.jpg",
    campName: "Onay Beach",
    description:
      " This is one of the best beach camping sites, beautiful and pristine.",
  },
  {
    id: 4,
    image: "./assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg",
    campName: "Seven Sisters Waterfall",
    description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
  },
  {
    id: 5,
    image: "./assets/Camp Images/Compressed Images/Latik Riverside.jpg",
    campName: "Latik Riverside",
    description:
      "Philippines is one of the most dazzling countries in all of Asia.",
  },
  {
    id: 6,
    image: "./assets/Camp Images/Compressed Images/Buloy Springs.jpg",
    campName: "Buloy Springs",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
];
const camps = document.querySelector(".camps");
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

camps.innerHTML = html;

console.log(html);
