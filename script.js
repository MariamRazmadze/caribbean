const navbarMores = document.querySelectorAll(".navbar-more");
const dropdownLeft = document.querySelector(".dropdown-left");
const navbarSignIns = document.querySelectorAll(".navbar-sign-in");
const dropdownRight = document.querySelector(".dropdown-right");
const dropdownDestination = document.querySelector(".dropdown-destination");
const searchFormButton = document.querySelector(".search-form-button");
const buttonDestination = document.querySelector(".button-destination");
const doneButton = document.querySelector(".done");
const modal = document.querySelector(".modal-element");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const navbarEnglishs = document.querySelectorAll(".navbar-english");
const popularDestinations = document.querySelector(".popular-destinations");
const otherDestinations = document.querySelector(".other-destinations");
const selectedDestinations = document.querySelector(".selected-destinations");
const select = document.querySelector("#regions");
const resultTitle = document.querySelector(".result-title");
const dropdownDestinationInput = document.querySelector(
  ".dropdown-destination-input"
);
const dropdownDestinationClearButton = document.querySelector(
  ".dropdown-destination-clear-button"
);
const regions = [];
const popular = [];
const other = [];

navbarMores.forEach((navbarMore) => {
  navbarMore.addEventListener("click", () => {
    dropdownLeft.classList.toggle("hidden");
  });
});

navbarSignIns.forEach((navbarSignIn) => {
  navbarSignIn.addEventListener("click", () => {
    dropdownRight.classList.toggle("hidden");
  });
});
searchFormButton.addEventListener("click", () => {
  dropdownDestination.classList.toggle("hidden");
  dropdownDestinationInput.focus();
});

dropdownLeft.addEventListener("click", (event) => {
  event.stopPropagation();
});

dropdownRight.addEventListener("click", (event) => {
  event.stopPropagation();
});

dropdownDestination.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", function (event) {
  navbarMores.forEach((navbarMore) => {
    navbarMore.style.border = "none";
  });
  navbarSignIns.forEach((navbarSignIn) => {
    navbarSignIn.style.border = "none";
  });

  let isNavbarMore = false;
  let isNavbarSignIn = false;

  navbarMores.forEach((navbarMore) => {
    if (navbarMore === event.target || navbarMore.contains(event.target)) {
      isNavbarMore = true;
    }
  });

  navbarSignIns.forEach((navbarSignIn) => {
    if (navbarSignIn === event.target || navbarSignIn.contains(event.target)) {
      isNavbarSignIn = true;
    }
  });

  if (!isNavbarMore) {
    dropdownLeft.classList.add("hidden");
  }

  if (!isNavbarSignIn) {
    dropdownRight.classList.add("hidden");
  }

  if (
    searchFormButton !== event.target &&
    !searchFormButton.contains(event.target)
  ) {
    dropdownDestination.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navbarMores.forEach((element) => {
      if (!dropdownLeft.classList.contains("hidden")) {
        dropdownLeft.classList.add("hidden");
        element.style.border = "2px solid black";
      }
    });

    navbarSignIns.forEach((element) => {
      if (!dropdownRight.classList.contains("hidden")) {
        dropdownRight.classList.add("hidden");
        element.style.border = "2px solid black";
      }
    });

    if (!dropdownDestination.classList.contains("hidden")) {
      dropdownDestination.classList.add("hidden");
      searchFormButton.style.outline = "2px solid red";
    }

    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < navbarEnglishs.length; i++)
  navbarEnglishs[i].addEventListener("click", openModal);

btnsCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

fetch("./data/regions.json")
  .then((response) => response.json())
  .then((data) => {
    regions.push(...data.regions);

    const options = regions.map((region) => {
      const option = document.createElement("option");
      option.value = region.value;
      option.text = region.text;
      return option;
    });
    select.append(...options);
  });

function createButton(destination) {
  const locationIcon = document.createElement("img");
  locationIcon.src = "assets/main/location.svg";
  locationIcon.alt = "location-icon";
  const closeSelected = document.createElement("img");
  closeSelected.src = "assets/main/close.svg";
  closeSelected.alt = "close-icon";

  const button = document.createElement("button");
  button.innerHTML = destination.destination;
  button.className = "destination-button";
  button.prepend(locationIcon);
  button.locationIcon = locationIcon;
  button.closeSelected = closeSelected;
  button.addEventListener("click", function () {
    if (button.parentNode.className === "destinations selected-destinations") {
      if (destination.type === "popular") {
        popularDestinations.append(button);
      } else if (destination.type === "other") {
        otherDestinations.append(button);
      }
      selectedDestination = null;
      button.classList.remove("selected");
      button.removeChild(button.closeSelected);
      button.prepend(button.locationIcon);
    } else {
      selectedDestinations.append(button);
      selectedDestination = destination;
      button.classList.add("selected");
      button.removeChild(button.locationIcon);
      button.appendChild(button.closeSelected);
    }
    selectedDestinations.append(clearAllButton);
    if (selectedDestinations.childElementCount > 1) {
      clearAllButton.style.display = "block";
      resultTitle.style.display = "block";
    } else {
      clearAllButton.style.display = "none";
      resultTitle.style.display = "none";
    }
    buttonDestination.textContent = selectedDestination
      ? selectedDestination.destination
      : "Caribbean";
  });

  button.dataset.destination = JSON.stringify(destination);
  return button;
}

let destinations = [];
let selectedDestination;
fetch("./data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    for (let destination of [...data.popular, ...data.other]) {
      const button = createButton(destination);
      if (destination.type === "popular") {
        popularDestinations.append(button);
      } else if (destination.type === "other") {
        otherDestinations.append(button);
      }
      destination.element = button;
      destinations.push(destination);
    }
    selectedDestination = destinations[2];
    console.log(selectedDestination);
    const selectedButton = destinations.find(function (destination) {
      return destination.destination === selectedDestination.destination;
    }).element;
    selectedButton.classList.add("selected");
    selectedButton.removeChild(selectedButton.locationIcon);
    selectedButton.appendChild(selectedButton.closeSelected);
    selectedDestinations.append(selectedButton);
    selectedDestinations.append(clearAllButton);
    clearAllButton.style.display = "block";
  });

const clearAllButton = document.createElement("button");
clearAllButton.innerHTML = "Clear All";
clearAllButton.className = "clear-all-button";
clearAllButton.addEventListener("click", function () {
  const buttons = selectedDestinations.querySelectorAll(".destination-button");
  for (let button of buttons) {
    const destination = JSON.parse(button.dataset.destination);
    if (destination.type === "popular") {
      popularDestinations.append(button);
    } else if (destination.type === "other") {
      otherDestinations.append(button);
    }
    button.classList.remove("selected");
    button.removeChild(button.closeSelected);
    button.prepend(button.locationIcon);
    selectedDestinations.append(clearAllButton);
  }
  selectedDestination = null;
  clearAllButton.style.display = "none";
  resultTitle.style.display = "none";
});

selectedDestinations.after(clearAllButton);

doneButton.addEventListener("click", function () {
  dropdownDestination.classList.add("hidden");
});

dropdownDestinationInput.addEventListener("input", function (e) {
  const value = e.target.value;
  console.log(value);
  let matchingButton = null;
  destinations.forEach((destination) => {
    const button = destination.element;
    const isVisible = destination.destination
      .toLowerCase()
      .includes(value.toLowerCase());
    button.classList.toggle("hidden", !isVisible);
    console.log(button);
    if (isVisible) {
      matchingButton = button;
    }
  });
  console.log(matchingButton);
  const popularButton = popularDestinations.querySelector(
    ".destination-button:not(.hidden)"
  );
  const otherButton = otherDestinations.querySelector(
    ".destination-button:not(.hidden)"
  );
  popularDestinations.style.display = popularButton ? "block" : "none";
  otherDestinations.style.display = otherButton ? "block" : "none";
});
