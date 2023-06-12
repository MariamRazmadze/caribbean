const navbarMores = document.querySelectorAll(".navbar-more");
const dropdownLeft = document.querySelector(".dropdown-left");
const navbarSignIns = document.querySelectorAll(".navbar-sign-in");
const dropdownRight = document.querySelector(".dropdown-right");
const dropdownDestination = document.querySelector(".dropdown-destination");
const dropdownDuration = document.querySelector(".dropdown-duration");
const dropdownTravellers = document.querySelector(".dropdown-travellers");
const destinationSearchFormButton = document.querySelector(
  ".destination-search-form-button"
);
const departurePortsContainer = document.querySelector(
  "#departure-ports-container"
);
const departurePortsButton = document.querySelector("#departure-ports-button");
const buttonsContainer = document.querySelector(".buttons-container");
const shipsButton = document.querySelector("#ships-button");
const shipsContainer = document.querySelector("#ships-container");
const durationButton = document.querySelector(".duration-button");
const travellersButton = document.querySelector(".travellers-button");
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
const adultPlusButton = document.querySelector(".adults .plus-button");
const adultMinusButton = document.querySelector(".adults .minus-button");
const childrenPlusButton = document.querySelector(".children .plus-button");
const childrenMinusButton = document.querySelector(".children .minus-button");
const travellersDynamic = document.querySelector(".travellers-dynamic");
const popularPorts = document.querySelector(".popular-ports");
const allShips = document.querySelector(".all-ships");
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
destinationSearchFormButton.addEventListener("click", () => {
  dropdownDestination.classList.toggle("hidden");
  dropdownDestinationInput.focus();
});

departurePortsButton.addEventListener("click", () => {
  if (departurePortsContainer.style.display === "none") {
    departurePortsContainer.style.display = "block";
  } else {
    departurePortsContainer.style.display = "none";
  }
});

shipsButton.addEventListener("click", () => {
  if (shipsContainer.style.display === "none") {
    shipsContainer.style.display = "block";
  } else {
    shipsContainer.style.display = "none";
  }
});

durationButton.addEventListener("click", () => {
  dropdownDuration.classList.toggle("hidden");
});

travellersButton.addEventListener("click", () => {
  dropdownTravellers.classList.toggle("hidden");
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

dropdownDuration.addEventListener("click", (event) => {
  event.stopPropagation();
});

dropdownTravellers.addEventListener("click", (event) => {
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
    destinationSearchFormButton !== event.target &&
    !destinationSearchFormButton.contains(event.target)
  ) {
    dropdownDestination.classList.add("hidden");
  }

  if (
    durationButton !== event.target &&
    !durationButton.contains(event.target)
  ) {
    dropdownDuration.classList.add("hidden");
  }

  if (
    travellersButton !== event.target &&
    !travellersButton.contains(event.target)
  ) {
    dropdownTravellers.classList.add("hidden");
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
    }

    if (!dropdownDuration.classList.contains("hidden")) {
      dropdownDuration.classList.add("hidden");
    }

    if (!dropdownTravellers.classList.contains("hidden")) {
      dropdownTravellers.classList.add("hidden");
    }

    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.position = "fixed";
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.position = "";
};

const closeDestination = function () {
  dropdownDestination.classList.add("hidden");
};

const closeDuration = function () {
  dropdownDuration.classList.add("hidden");
};

const closeTravelers = function () {
  dropdownTravellers.classList.add("hidden");
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

function createButton(item, itemType, iconUrl) {
  const locationIcon = document.createElement("img");
  locationIcon.src = iconUrl;
  locationIcon.alt = "location-icon";
  const closeSelected = document.createElement("img");
  closeSelected.src = "assets/main/close.svg";
  closeSelected.alt = "close-icon";

  const button = document.createElement("button");
  button.innerHTML = item.name;
  button.className = `${itemType}-button`;
  button.prepend(locationIcon);
  button.locationIcon = locationIcon;
  button.closeSelected = closeSelected;
  button.addEventListener("click", function () {
    if (itemType === "destination") {
      if (
        button.parentNode.className === "destinations selected-destinations"
      ) {
        if (item.type === "popular") {
          popularDestinations.append(button);
        } else if (item.type === "other") {
          otherDestinations.append(button);
        }
        selectedItem = null;
        button.classList.remove("selected");
        button.removeChild(button.closeSelected);
        button.prepend(button.locationIcon);
      } else {
        selectedDestinations.append(button);
        selectedItem = item;
        button.classList.add("selected");
        button.removeChild(button.locationIcon);
        button.appendChild(button.closeSelected);
      }
      selectedDestinations.append(clearAllButton);
      console.log(selectedDestinations.childElementCount);
      if (selectedDestinations.childElementCount > 1) {
        clearAllButton.style.display = "block";
        resultTitle.style.display = "block";
      } else {
        clearAllButton.style.display = "none";
        resultTitle.style.display = "none";
      }
      buttonDestination.textContent = selectedItem
        ? selectedItem.name
        : "Caribbean";
    } else if (itemType === "departure-port") {
    } else if (itemType === "ship") {
    }
  });

  button.dataset.item = JSON.stringify(item);
  return button;
}

let items = [];
let selectedItem;

fetch("./data/destinations.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of [...data.popular, ...data.other]) {
      const button = createButton(
        item,
        "destination",
        "assets/main/location.svg"
      );
      if (item.type === "popular") {
        popularDestinations.append(button);
      } else if (item.type === "other") {
        otherDestinations.append(button);
      }
      item.element = button;
      items.push(item);
    }
    selectedItem = items[2];
    const selectedButton = items.find(function (item) {
      return item.name === selectedItem.name;
    }).element;
    selectedButton.classList.add("selected");
    selectedButton.removeChild(selectedButton.locationIcon);
    selectedButton.appendChild(selectedButton.closeSelected);
    selectedDestinations.append(selectedButton);
    selectedDestinations.append(clearAllButton);
    clearAllButton.style.display = "block";
  });

fetch("./data/departure-ports.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data) {
      const button = createButton(
        item,
        "departure-port",
        "./assets/main/location.svg"
      );
      popularPorts.append(button);
      item.element = button;
      items.push(item);
    }
  });

fetch("./data/ships.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data) {
      const button = createButton(item, "ship", "./assets/main/ship.svg");
      allShips.append(button);
      item.element = button;
      items.push(item);
    }
  });

const clearAllButton = document.createElement("button");
clearAllButton.innerHTML = "Clear All";
clearAllButton.className = "clear-all-button";

clearAllButton.addEventListener("click", function () {
  const destinationButtons = selectedDestinations.querySelectorAll(
    ".destination-button"
  );
  for (let button of destinationButtons) {
    const destination = JSON.parse(button.dataset.item);
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

  selectedItem = null;
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
  items.forEach((item) => {
    const button = item.element;
    const isVisible = item.name.toLowerCase().includes(value.toLowerCase());
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

function updateButton() {
  let adultsNumber = parseInt(
    document.querySelector(".adults-number").innerText
  );
  let childrenNumber = parseInt(
    document.querySelector(".children-number").innerText
  );
  let totalNumber = adultsNumber + childrenNumber;
  travellersDynamic.innerText = totalNumber + " travellers, 1 cabin";
}

function changeNumber(type, change) {
  let numberElement;
  if (type === "adults") {
    numberElement = document.querySelector(".adults-number");
  } else if (type === "children") {
    numberElement = document.querySelector(".children-number");
  }
  let currentNumber = parseInt(numberElement.innerText);
  let newNumber = currentNumber + change;
  if (newNumber >= 0) {
    numberElement.innerText = newNumber;
    if (type === "children") {
      let childAgesElement = document.querySelector(".child-ages");
      if (change === 1) {
        let selectContainer = document.createElement("div");
        selectContainer.className = "select-container";

        let selectLabel = document.createElement("div");
        selectLabel.className = "select-label";
        selectLabel.innerHTML = `Child ${newNumber} age <span class="asterisk">*</span> `;
        selectLabel.style.display = "none";
        selectContainer.appendChild(selectLabel);

        let selectElement = document.createElement("select");
        selectElement.id = "child-" + newNumber + "-age";
        selectElement.className = "child-age";
        selectElement.onfocus = function () {
          defaultOptionElement.style.display = "none";
        };
        let defaultOptionElement = document.createElement("option");
        defaultOptionElement.value = "";
        defaultOptionElement.innerHTML = `Child ${newNumber} age`;
        selectElement.appendChild(defaultOptionElement);

        let underOneOptionElement = document.createElement("option");
        underOneOptionElement.value = "under-1";
        underOneOptionElement.innerText = "Under 1";
        selectElement.appendChild(underOneOptionElement);
        for (let i = 1; i <= 17; i++) {
          let optionElement = document.createElement("option");
          optionElement.value = i;
          optionElement.innerText = i;
          selectElement.appendChild(optionElement);
        }
        selectContainer.appendChild(selectElement);
        childAgesElement.appendChild(selectContainer);

        selectElement.addEventListener("change", function () {
          if (this.value) {
            selectLabel.style.display = "block";
            selectLabel.style.fontSize = "11px";
            this.style.backgroundImage =
              'url("./assets/navbar/more.svg"), none';
          } else {
            selectLabel.style.display = "none";
            selectLabel.style.fontSize = "initial";
            this.style.backgroundImage =
              'url("./assets/navbar/more.svg"), url("./assets/red-asterisk.svg")';
          }
        });
      } else {
        let selectContainer = document.getElementById(
          "child-" + currentNumber + "-age"
        ).parentNode;
        childAgesElement.removeChild(selectContainer);
      }
    }
    let adultsNumber = parseInt(
      document.querySelector(".adults-number").innerText
    );
    let childrenNumber = parseInt(
      document.querySelector(".children-number").innerText
    );
    let errorMessageElement = document.querySelector(".error-message");
    let adultPlusButton = document.querySelector(".adults .plus-button");
    let childrenPlusButton = document.querySelector(".children .plus-button");
    if (adultsNumber + childrenNumber > 5) {
      errorMessageElement.classList.remove("hidden");
      adultPlusButton.disabled = true;
      childrenPlusButton.disabled = true;
    } else {
      errorMessageElement.classList.add("hidden");
      adultPlusButton.disabled = false;
      childrenPlusButton.disabled = false;
    }
  }
  updateButton();
}

adultPlusButton.addEventListener("click", function () {
  changeNumber("adults", 1);
});
adultMinusButton.addEventListener("click", function () {
  changeNumber("adults", -1);
});
childrenPlusButton.addEventListener("click", function () {
  changeNumber("children", 1);
});
childrenMinusButton.addEventListener("click", function () {
  changeNumber("children", -1);
});

document.querySelector(".expand-button").addEventListener("click", function () {
  this.classList.add("hidden");
  document.querySelector(".cruise-search-form").classList.remove("desktop");
});

const dataUrl = "./data/cruises.json";

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const cardTemplate = document.querySelector(".card");
    const cardsContainer = document.querySelector(".cards-container");

    data.cruises.forEach((cruise) => {
      const card = cardTemplate.cloneNode(true);
      card.classList.remove("template");

      const slider = card.querySelector(".slider");
      cruise.cruise.pictures.forEach((picture, index) => {
        const slide = document.createElement("li");
        slide.classList.add("slide");
        slide.innerHTML = `<img src="${picture}" alt="" class="carousel-image" />`;
        if (index === 1) {
          slide.dataset.active = true;
        }
        slider.appendChild(slide);
      });

      card.querySelector(".duration").textContent = cruise.cruise.duration;
      card.querySelector(".destination").textContent =
        cruise.cruise.destination;
      card.querySelector(".cruise-line-logo").src = cruise.cruise.logo;
      card.querySelector(".ship").textContent = cruise.cruise.ship;

      const startDate = new Date(cruise.cruise.start_date);
      const endDate = new Date(cruise.cruise.end_date);
      const formattedStartDate = startDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      const formattedEndDate = endDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      card.querySelector(".start-date").textContent = formattedStartDate;
      card.querySelector(".end-date").textContent = formattedEndDate;

      const itinerary = card.querySelector(".itinerary");
      let itineraryText = "";
      cruise.cruise.itinerary.forEach((stop, index) => {
        if (index < 3) {
          itineraryText += stop;
          if (index < 2) {
            itineraryText += " • ";
          }
        }
      });
      if (cruise.cruise.itinerary.length > 3) {
        const remainingStops = cruise.cruise.itinerary.length - 3;
        itineraryText += ` and ${remainingStops} more stops`;
      }
      itinerary.textContent = itineraryText;

      if (cruise.cruise.discount) {
        card.querySelector(
          ".original-price"
        ).textContent = `$${cruise.cruise.original_price}`;
        card.querySelector(
          ".discount-percentage"
        ).textContent = `${cruise.cruise.discount} off`;
        let icon = document.createElement("img");
        icon.src = "./assets/main/exclamation.svg";
        card.querySelector(".original-price-container").prepend(icon);
      } else {
        card.querySelector(".original-price").style.display = "none";
        card.querySelector(".discount-percentage").style.display = "none";
      }

      card.querySelector(".price").textContent = `$${cruise.cruise.price}`;

      card.querySelector(
        ".cabin-experience"
      ).textContent = `${cruise.cruise.cabin_experience} cabin per traveller`;

      const exploreOnMapLink = card.querySelector(".explore-on-map");
      exploreOnMapLink.href = cruise.cruise.explore_on_map;

      cardsContainer.appendChild(card);
    });

    const carouselButtons = document.querySelectorAll(".carousel-button");
    console.log(carouselButtons);
    carouselButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest(".carousel").querySelector(".slider");

        console.log(slides);

        const activeSlide = slides.querySelector("[data-active]");
        console.log(activeSlide);
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log(newIndex);

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        console.log(activeSlide);
        console.log(slides.children[newIndex]);

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
  });

fetch("./data/cruise-lines.json")
  .then((response) => response.json())
  .then((cruiseLines) => {
    const cruiseLineContainer = document.querySelector(
      "#cruise-line-container"
    );
    cruiseLines.forEach((cruiseLine) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = cruiseLine;
      checkbox.className = "side-checkbox";
      checkbox.name = "cruise-line";
      checkbox.value = cruiseLine;

      const label = document.createElement("label");
      label.htmlFor = cruiseLine;
      label.textContent = cruiseLine;
      const div = document.createElement("div");
      div.className = "checkbox-alignment";
      div.appendChild(checkbox);
      div.appendChild(label);
      cruiseLineContainer.appendChild(div);
    });
  });

fetch("./data/cabin-experience.json")
  .then((response) => response.json())
  .then((cabinExperiences) => {
    const cabinExperienceContainer = document.querySelector(
      "#cabin-experience-container"
    );
    cabinExperiences.forEach((cabinExperience) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = cabinExperience;
      radio.className = "side-radio";
      radio.name = "cabin-experience";
      radio.value = cabinExperience;

      const label = document.createElement("label");
      label.htmlFor = cabinExperience;
      label.textContent = cabinExperience;
      const div = document.createElement("div");
      div.className = "radio-alignment";
      div.appendChild(radio);
      div.appendChild(label);
      cabinExperienceContainer.appendChild(div);
    });
  });
