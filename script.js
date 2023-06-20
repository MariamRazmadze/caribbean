const navbarMores = document.querySelectorAll(".navbar-more");
const dropdownLeft = document.querySelector(".dropdown-left");
const navbarSignIns = document.querySelectorAll(".navbar-sign-in");
const dropdownRight = document.querySelector(".dropdown-right");
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownDestination = document.querySelector(".dropdown-destination");
const dropdownDuration = document.querySelector(".dropdown-duration");
const dropdownTravellers = document.querySelector(".dropdown-travellers");
const filterContainer = document.querySelector("#filter-container");
const cardsContainer = document.querySelector(".cards-container");
const banner = document.querySelector(".middle-banner");
const destinationSearchFormButton = document.querySelector(
  ".destination-search-form-button"
);
const departurePortsContainer = document.querySelector(
  "#departure-ports-container"
);
const departurePortsButton = document.querySelector("#departure-ports-button");
const dropdownDeparturePortInput = document.querySelector(
  ".dropdown-departure-port-input"
);
const dropdownShipInput = document.querySelector(".dropdown-ship-input");
const dropdonwDeparture = document.querySelector(".dropdown-departure");
const dropdownShip = document.querySelector(".dropdown-ship");
const buttonsContainer = document.querySelector(".buttons-container");
const shipsButton = document.querySelector("#ships-button");
const shipsContainer = document.querySelector("#ships-container");
const durationButton = document.querySelector(".duration-button");
const travellersButton = document.querySelector(".travellers-button");
const buttonDestination = document.querySelector(".button-destination");
const buttonPort = document.querySelector(".button-port");
const buttonShip = document.querySelector(".button-ship");
const doneButton = document.querySelector(".done");
const modal = document.querySelector(".modal-element");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const navbarEnglishs = document.querySelectorAll(".navbar-english");
const popularDestinations = document.querySelector(".popular-destinations");
const otherDestinations = document.querySelector(".other-destinations");
const selectedDestinations = document.querySelector(".selected-destinations");
const selectedDeparturePorts = document.querySelector(
  ".selected-departure-ports"
);
const selectedShips = document.querySelector(".selected-ships");
const select = document.querySelector("#regions");
const resultTitle = document.querySelector(".result-title");
const portsTitle = document.querySelector(".ports-title");
const shipsTitle = document.querySelector(".ships-title");
const adultPlusButton = document.querySelector(".adults .plus-button");
const adultMinusButton = document.querySelector(".adults .minus-button");
const childrenPlusButton = document.querySelector(".children .plus-button");
const childrenMinusButton = document.querySelector(".children .minus-button");
const travellersDynamic = document.querySelector(".travellers-dynamic");
const popularPorts = document.querySelector(".popular-ports");
const allShips = document.querySelector(".all-ships");
const firstCardContainer = document.querySelector(".first-card-container");
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
  dropdonwDeparture.classList.toggle("hidden");
  dropdownDeparturePortInput.focus();
});

shipsButton.addEventListener("click", () => {
  dropdownShip.classList.toggle("hidden");
  dropdownShipInput.focus();
});

durationButton.addEventListener("click", () => {
  dropdownDuration.classList.toggle("hidden");
});

travellersButton.addEventListener("click", () => {
  dropdownTravellers.classList.toggle("hidden");
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });
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
    departurePortsButton !== event.target &&
    !departurePortsButton.contains(event.target)
  ) {
    dropdonwDeparture.classList.add("hidden");
  }

  if (shipsButton !== event.target && !shipsButton.contains(event.target)) {
    dropdownShip.classList.add("hidden");
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

const updateBannerPosition = () => {
  const firstVisibleCard = document.querySelector(
    ".card:not(.template):not([style*='display: none'])"
  );
  console.log("firstVisible", firstVisibleCard);
  if (firstVisibleCard) {
    firstVisibleCard.parentNode.insertBefore(
      banner,
      firstVisibleCard.nextSibling
    );
  } else {
    cardsContainer.appendChild(banner);
  }
};

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

    dropdowns.forEach((dropdown) => {
      if (!dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
      }
    });

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

const closeDeparture = function () {
  dropdonwDeparture.classList.add("hidden");
};

const closeShip = function () {
  dropdownShip.classList.add("hidden");
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
      selectedDestinations.append(clearDestinationsButton);
      console.log(selectedDestinations);
      if (selectedDestinations.childElementCount > 1) {
        clearDestinationsButton.style.display = "block";
        resultTitle.style.display = "block";
      } else {
        clearDestinationsButton.style.display = "none";
        resultTitle.style.display = "none";
      }
      buttonDestination.textContent = selectedItem
        ? selectedItem.name
        : "Caribbean";
    } else if (itemType === "departure-port") {
      if (button.parentNode.className === "selected-departure-ports") {
        popularPorts.append(button);
        selectedItem = null;
        button.classList.remove("selected");
        button.removeChild(button.closeSelected);
        button.prepend(button.locationIcon);
      } else {
        selectedDeparturePorts.append(button);
        selectedItem = item;
        button.classList.add("selected");
        button.removeChild(button.locationIcon);
        button.appendChild(button.closeSelected);
      }
      selectedDeparturePorts.append(clearDeparturesButton);
      if (selectedDeparturePorts.childElementCount > 1) {
        clearDeparturesButton.style.display = "block";
        resultTitle.style.display = "block";
      } else {
        clearDeparturesButton.style.display = "none";
        resultTitle.style.display = "none";
      }
      buttonPort.textContent = selectedItem ? selectedItem.name : "Canada";
      filterCards();
    } else if (itemType === "ship") {
      if (button.parentNode.className === "ships selected-ships") {
        allShips.append(button);
        selectedItem = null;
        button.classList.remove("selected");
        button.removeChild(button.closeSelected);
        button.prepend(button.locationIcon);
      } else {
        selectedShips.append(button);
        selectedItem = item;
        button.classList.add("selected");
        button.removeChild(button.locationIcon);
        button.appendChild(button.closeSelected);
      }
      selectedShips.append(clearShipsButton);
      if (selectedShips.childElementCount > 1) {
        clearShipsButton.style.display = "block";
        resultTitle.style.display = "block";
      } else {
        clearShipsButton.style.display = "none";
        resultTitle.style.display = "none";
      }
      buttonShip.textContent = selectedItem ? selectedItem.name : "Royal";
    }
    filterCards();
  });

  button.dataset.item = JSON.stringify(item);
  return button;
}

let destinationItems = [];
let departurePortItems = [];
let shipItems = [];

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
      destinationItems.push(item);
    }
    selectedItem = destinationItems[2];
    const selectedButton = destinationItems.find(function (item) {
      return item.name === selectedItem.name;
    }).element;
    selectedButton.classList.add("selected");
    selectedButton.removeChild(selectedButton.locationIcon);
    selectedButton.appendChild(selectedButton.closeSelected);
    selectedDestinations.append(selectedButton);
    selectedDestinations.append(clearDestinationsButton);
    clearDestinationsButton.style.display = "block";
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
      departurePortItems.push(item);
    }
  });

fetch("./data/ships.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data) {
      const button = createButton(item, "ship", "./assets/main/ship.svg");
      allShips.append(button);
      item.element = button;
      shipItems.push(item);
    }
    // ...
  });

const clearDestinationsButton = document.createElement("button");
clearDestinationsButton.innerHTML = "Clear Destinations";
clearDestinationsButton.className =
  "clear-destinations-button clear-all-button";

clearDestinationsButton.addEventListener("click", function () {
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
  }
  selectedItem = null;
  clearDestinationsButton.style.display = "none";
  resultTitle.style.display = "none";

  const destinationFilterButtons = filterContainer.querySelectorAll(
    ".destination-filter-button"
  );
  for (let button of destinationFilterButtons) {
    button.remove();
  }
});

const clearDeparturesButton = document.createElement("button");
clearDeparturesButton.innerHTML = "Clear Departures";
clearDeparturesButton.className = "clear-departures-button clear-all-button";

clearDeparturesButton.addEventListener("click", function () {
  const departurePortButtons = selectedDeparturePorts.querySelectorAll(
    ".departure-port-button"
  );
  for (let button of departurePortButtons) {
    popularPorts.append(button);
    button.classList.remove("selected");
    button.removeChild(button.closeSelected);
    button.prepend(button.locationIcon);
  }
  selectedItem = null;
  clearDeparturesButton.style.display = "none";
  portsTitle.style.display = "none";

  const departureFilterButtons = filterContainer.querySelectorAll(
    ".departure-filter-button"
  );
  for (let button of departureFilterButtons) {
    button.remove();
  }
});

const clearShipsButton = document.createElement("button");
clearShipsButton.innerHTML = "Clear Ships";
clearShipsButton.className = "clear-ships-button clear-all-button";

clearShipsButton.addEventListener("click", function () {
  const shipButtons = selectedShips.querySelectorAll(".ship-button");
  for (let button of shipButtons) {
    allShips.append(button);
    button.classList.remove("selected");
    button.removeChild(button.closeSelected);
    button.prepend(button.locationIcon);
  }

  selectedItem = null;
  clearShipsButton.style.display = "none";
  shipsTitle.style.display = "none";

  const shipFilterButtons = filterContainer.querySelectorAll(
    ".ship-filter-button"
  );
  for (let button of shipFilterButtons) {
    button.remove();
  }
});

doneButton.addEventListener("click", function () {
  dropdownDestination.classList.add("hidden");
});

function filterItems(
  inputElement,
  items,
  destinations,
  otherDestinations,
  buttonClass
) {
  inputElement.addEventListener("input", function (e) {
    const value = e.target.value;
    let matchingButton = null;
    items.forEach((item) => {
      const button = item.element;
      const isVisible = item.name.toLowerCase().includes(value.toLowerCase());
      button.classList.toggle("hidden", !isVisible);
      if (isVisible) {
        matchingButton = button;
      }
    });
    if (otherDestinations) {
      const popularButton = destinations.querySelector(
        `.${buttonClass}:not(.hidden)`
      );
      const otherButton = otherDestinations.querySelector(
        `.${buttonClass}:not(.hidden)`
      );
      destinations.style.display = popularButton ? "block" : "none";
      otherDestinations.style.display = otherButton ? "block" : "none";
    } else {
      const button = destinations.querySelector(`.${buttonClass}:not(.hidden)`);
      destinations.style.display = button ? "block" : "none";
    }
  });
}

filterItems(
  dropdownDestinationInput,
  destinationItems,
  popularDestinations,
  otherDestinations,
  "destination-button"
);
filterItems(
  dropdownDeparturePortInput,
  departurePortItems,
  popularPorts,
  null,
  "departure-port-button"
);
filterItems(dropdownShipInput, shipItems, allShips, null, "ship-button");

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
    const cardTemplate = document.querySelector(".card");
    const cardsContainer = document.querySelector(".cards-container");

    data.cruises.forEach((cruise, index) => {
      const card = cardTemplate.cloneNode(true);
      card.classList.remove("template");

      const cruiseLineClassName = `cruise-line-${cruise.cruise.cruise_line
        .toLowerCase()
        .replace(/ /g, "-")}`;
      card.classList.add(cruiseLineClassName);
      console.log(card.classList);
      card.classList.add(
        `cabin-experience-${cruise.cruise.cabin_experience.replace(/ /g, "-")}`
      );
      console.log(card.classList);
      card.classList.add(
        `destination-${cruise.cruise.destination
          .toLowerCase()
          .replace(/ /g, "-")}`
      );
      console.log(card.classList);

      const className = `departure-port-${cruise.cruise.departure_port
        .toLowerCase()
        .replace(/ /g, "-")}`;
      console.log(`classlist class name: ${className}`);
      card.classList.add(className);

      console.log(card.classList);

      const classNameShip = `ship-${cruise.cruise.ship
        .toLowerCase()
        .replace(/ /g, "-")}`;
      console.log(`classlist class name: ${className}`);
      card.classList.add(classNameShip);

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

      if (index === 0) {
        firstCardContainer.appendChild(card);
      } else {
        cardsContainer.appendChild(card);
      }
      updateBannerPosition();
    });

    const carouselButtons = document.querySelectorAll(".carousel-button");
    carouselButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest(".carousel").querySelector(".slider");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });
    updateCruisesFoundText();
  });

let cruiseLineCheckboxes;
let cabinExperienceRadios;

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
    cruiseLineCheckboxes = document.querySelectorAll(
      'div.checkbox-alignment input[type="checkbox"][name="cruise-line"]'
    );

    console.log(cruiseLineCheckboxes);
    cruiseLineCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterCards);
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

      if (cabinExperience === "any") {
        radio.checked = true;
      }

      const label = document.createElement("label");
      label.htmlFor = cabinExperience;
      label.textContent = cabinExperience;
      const div = document.createElement("div");
      div.className = "radio-alignment";
      div.appendChild(radio);
      div.appendChild(label);
      cabinExperienceContainer.appendChild(div);
    });
    cabinExperienceRadios = document.querySelectorAll(
      'input[type="radio"][name="cabin-experience"]'
    );

    console.log(cabinExperienceRadios);
    cabinExperienceRadios.forEach((radio) => {
      radio.addEventListener("change", filterCards);
    });
  });

const cruisesFoundDiv = document.querySelector(".cruises-found-div");
function updateCruisesFoundText() {
  const displayedCards = document.querySelectorAll(
    ".card:not(.template):not([style*='display: none'])"
  );
  cruisesFoundDiv.textContent = `${displayedCards.length} cruises found - Prices are per traveler, available within last 24 hours and valid for US and Canadian residents only. Taxes, fees, and port expenses not included. Fuel supplement may apply.`;
}

function filterCards() {
  const selectedCruiseLines = Array.from(cruiseLineCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  const selectedCabinExperience = Array.from(cabinExperienceRadios).find(
    (radio) => radio.checked
  )?.value;

  const selectedDestinations = destinationItems
    .filter((item) => item.element.classList.contains("selected"))
    .map((item) => item.name);

  const selectedDeparturePorts = departurePortItems
    .filter((item) => item.element.classList.contains("selected"))
    .map((item) => item.name);

  const selectedShips = shipItems
    .filter((item) => item.element.classList.contains("selected"))
    .map((item) => item.name);

  console.log(
    selectedCruiseLines,
    selectedCabinExperience,
    selectedDeparturePorts
  );
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const matchesCruiseLine =
      selectedCruiseLines.length === 0 ||
      selectedCruiseLines.some((cruiseLine) =>
        card.classList.contains(
          `cruise-line-${cruiseLine.toLowerCase().replace(/ /g, "-")}`
        )
      );
    const matchesCabinExperience =
      !selectedCabinExperience ||
      selectedCabinExperience === "any" ||
      card.classList.contains(
        `cabin-experience-${selectedCabinExperience
          .toLowerCase()
          .replace(/ /g, "-")}`
      );
    const matchesDestination =
      selectedDestinations.length === 0 ||
      selectedDestinations.some((destination) =>
        card.classList.contains(
          `destination-${destination.toLowerCase().replace(/ /g, "-")}`
        )
      );

    const matchesDeparturePort =
      selectedDeparturePorts.length === 0 ||
      selectedDeparturePorts.some((departurePort) => {
        const className = `departure-port-${departurePort
          .toLowerCase()
          .replace(/ /g, "-")}`;
        console.log(`Generated class name: ${className}`);
        return card.classList.contains(className);
      });

    const matchesShip =
      selectedShips.length === 0 ||
      selectedShips.some((ship) => {
        const className = `ship-${ship.toLowerCase().replace(/ /g, "-")}`;
        console.log(`Generated class name: ${className}`);
        return card.classList.contains(className);
      });
    console.log(matchesCruiseLine, matchesCabinExperience, matchesDestination);
    if (
      matchesCruiseLine &&
      matchesCabinExperience &&
      matchesDestination &&
      matchesDeparturePort &&
      matchesShip
    ) {
      if (!card.classList.contains("template")) {
        card.style.display = "grid";
      }
    } else {
      card.style.display = "none";
    }
    updateCruisesFoundText();
    filterContainer.style.display = "block";
    updateBannerPosition();
  });

  function createFilterButton(text, onClick) {
    const filterButton = document.createElement("button");
    const closeSelected = document.createElement("img");
    const locationIcon = document.createElement("img");
    closeSelected.src = "assets/main/close.svg";
    filterButton.classList.add("filter-button");
    filterButton.innerText = text;
    filterButton.appendChild(closeSelected);
    filterButton.addEventListener("click", onClick);
    filterButton.closeSelected = closeSelected;
    filterButton.locationIcon = locationIcon;
    console.log(filterButton);
    return filterButton;
  }
  const existingFilterButtons = filterContainer.querySelectorAll(
    ".filter-button, .remove-all-filters-button"
  );
  existingFilterButtons.forEach((button) => button.remove());

  selectedCruiseLines.forEach((cruiseLine) => {
    const onClick = () => {
      const cruiseLineCheckbox = Array.from(cruiseLineCheckboxes).find(
        (checkbox) => checkbox.value === cruiseLine
      );
      cruiseLineCheckbox.checked = false;
      filterCards();
      filterContainer.removeChild(filterButton);
    };
    const filterButton = createFilterButton(cruiseLine, onClick);
    filterContainer.appendChild(filterButton);
  });

  if (selectedCabinExperience && selectedCabinExperience !== "any") {
    const onClick = () => {
      const anyCabinExperienceRadio = Array.from(cabinExperienceRadios).find(
        (radio) => radio.value === "any"
      );
      anyCabinExperienceRadio.checked = true;
      filterCards();
      filterContainer.removeChild(filterButton);
    };
    const filterButton = createFilterButton(selectedCabinExperience, onClick);
    filterContainer.appendChild(filterButton);
  }

  console.log("selected", selectedDestinations);
  selectedDestinations.forEach((destination) => {
    const onClick = () => {
      const destinationItem = destinationItems.find(
        (item) => item.name === destination
      );
      destinationItem.element.classList.remove("selected");
      if (
        ["Caribbean", "Bahamas", "Alaska", "Europe", "Mexico"].includes(
          destinationItem.name
        )
      ) {
        popularDestinations.append(destinationItem.element);
      } else {
        otherDestinations.append(destinationItem.element);
      }
      destinationItem.element.prepend(destinationItem.element.locationIcon);
      destinationItem.element.removeChild(
        destinationItem.element.closeSelected
      );
      filterCards();
    };
    const filterButton = createFilterButton(destination, onClick);
    filterContainer.appendChild(filterButton);
    filterButton.classList.add("destination-filter-button");
  });

  selectedDeparturePorts.forEach((departurePort) => {
    const onClick = () => {
      const departurePortItem = departurePortItems.find(
        (item) => item.name === departurePort
      );
      departurePortItem.element.classList.remove("selected");
      popularPorts.append(departurePortItem.element);
      departurePortItem.element.prepend(departurePortItem.element.locationIcon);
      departurePortItem.element.removeChild(
        departurePortItem.element.closeSelected
      );
      filterCards();
    };
    const filterButton = createFilterButton(departurePort, onClick);
    filterContainer.appendChild(filterButton);
    filterButton.classList.add("departure-filter-button");
  });

  console.log(selectedShips);
  selectedShips.forEach((ship) => {
    const onClick = () => {
      const shipItem = shipItems.find((item) => item.name === ship);
      shipItem.element.classList.remove("selected");
      allShips.append(shipItem.element);
      shipItem.element.prepend(shipItem.element.locationIcon);
      shipItem.element.removeChild(shipItem.element.closeSelected);

      filterCards();
    };
    const filterButton = createFilterButton(ship, onClick);
    filterContainer.appendChild(filterButton);
    filterButton.classList.add("ship-filter-button");
  });

  const removeAllFiltersButton = document.createElement("button");
  removeAllFiltersButton.classList.add("remove-all-filters-button");
  removeAllFiltersButton.innerText = "Remove All Filters";
  removeAllFiltersButton.addEventListener("click", () => {
    cruiseLineCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    cabinExperienceRadios.forEach((radio) => (radio.checked = false));
    destinationItems.forEach((item) => {
      item.element.classList.remove("selected");
      item.element.prepend(item.element.locationIcon);
      if (item.element.contains(item.element.closeSelected)) {
        item.element.removeChild(item.element.closeSelected);
      }
      if (item.type === "popular") {
        popularDestinations.append(item.element);
      } else if (item.type === "other") {
        otherDestinations.append(item.element);
      }
    });
    departurePortItems.forEach((item) => {
      item.element.classList.remove("selected");
      item.element.prepend(item.element.locationIcon);
      if (item.element.contains(item.element.closeSelected)) {
        item.element.removeChild(item.element.closeSelected);
      }
      popularPorts.append(item.element);
    });
    shipItems.forEach((item) => {
      item.element.classList.remove("selected");
      item.element.prepend(item.element.locationIcon);
      if (item.element.contains(item.element.closeSelected)) {
        item.element.removeChild(item.element.closeSelected);
      }
      allShips.append(item.element);
    });
    filterCards();
    filterContainer.style.display = "none";
  });
  filterContainer.appendChild(removeAllFiltersButton);
}

const sortSelect = document.querySelector("#sort-select");
sortSelect.innerHTML = `
<option value="priceHighest">Price Highest</option>
  <option value="priceLowest">Price Lowest</option>
  <option value="departureEarliest">Departure Earliest</option>
  <option value="departureLatest">Departure Latest</option>
  <option value="durationShortest">Duration Shortest</option>
  <option value="durationLongest">Duration Longest</option>
`;

sortSelect.addEventListener("change", () => {
  const selectedOption = sortSelect.value;
  const cards = Array.from(document.querySelectorAll(".card:not(.template)"));
  cards.sort((a, b) => {
    if (selectedOption === "priceLowest") {
      return (
        parseFloat(a.querySelector(".price").textContent.replace("$", "")) -
        parseFloat(b.querySelector(".price").textContent.replace("$", ""))
      );
    } else if (selectedOption === "priceHighest") {
      return (
        parseFloat(b.querySelector(".price").textContent.replace("$", "")) -
        parseFloat(a.querySelector(".price").textContent.replace("$", ""))
      );
    } else if (selectedOption === "departureEarliest") {
      return (
        new Date(a.querySelector(".start-date").textContent) -
        new Date(b.querySelector(".start-date").textContent)
      );
    } else if (selectedOption === "departureLatest") {
      return (
        new Date(b.querySelector(".start-date").textContent) -
        new Date(a.querySelector(".start-date").textContent)
      );
    } else if (selectedOption === "durationShortest") {
      return (
        parseInt(a.querySelector(".duration").textContent) -
        parseInt(b.querySelector(".duration").textContent)
      );
    } else if (selectedOption === "durationLongest") {
      return (
        parseInt(b.querySelector(".duration").textContent) -
        parseInt(a.querySelector(".duration").textContent)
      );
    }
  });
  cards.forEach((card) => cardsContainer.appendChild(card));
});
