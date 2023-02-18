//Объявление попапов
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCardOpened = document.querySelector(".popup_type_card-opened");

//Объявление Profile элементов
const profileValueName = document.querySelector(".profile__value-name");
const profileValueDescription = document.querySelector(
  ".profile__value-description"
);

//Объявление попап-Profile элементов
const popupProfileName = document.querySelector(".popup__input_type_name");
const popupProfileDescription = document.querySelector(
  ".popup__input_type_description"
);

//Объявление попап-Card элементов
const popupCardTitle = document.querySelector(".popup__input_type_title");
const popupCardLink = document.querySelector(".popup__input_type_link");

//Объявление попап-Card-opened элементов
const popupCardOpenedImage = document.querySelector(".popup__image");
const popupCardOpenedTitle = document.querySelector(
  ".popup__image-description"
);

//Объявление кнопок
const popupSaveButtonProfile = document.querySelector(
  ".popup__save-button_profile"
);
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

const popupCloseButtonProfile = document.querySelector(
  ".popup__close-button_profile"
);
const popupCloseButtonCard = document.querySelector(
  ".popup__close-button_card"
);

const popupCloseButtonCardOpened = document.querySelector(
  ".popup__close-button_card-opened"
);

//Объявление форм
const popupContentProfile = document.querySelector(".popup__content_profile");
const popupContentCard = document.querySelector(".popup__content_card");

// Объявление template
const template = document
  .querySelector(".cards-template")
  .content.querySelector(".element");

//Объявление контейнера карточек
const cards = document.querySelector(".elements__wrapper");

// Массив карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// //Отображение карточек из массива
function renderCards() {
  initialCards.forEach((item) => {
    const card = template.cloneNode(true);

    card.querySelector(".element__title").textContent = item.name;
    card.querySelector(".element__image").src = item.link;
    cards.append(card);
  });
}
renderCards();

//Добавление карточки
function addCard(event) {
  event.preventDefault();

  const card = template.cloneNode(true);

  card.querySelector(".element__image").src = popupCardLink.value;
  card.querySelector(".element__title").textContent = popupCardTitle.value;

  cards.prepend(card);
  removePopup(popupCard);
}

// // Открытие картинки в попап
function OpenPopupCard() {
  cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("element__image")) {
      const eventTarget = event.target;
      const element = eventTarget.closest(".element");
      const elementTitle = element.querySelector(".element__title").textContent;

      popupCardOpenedImage.src = eventTarget.src;
      popupCardOpenedTitle.textContent = elementTitle;
      popupCardOpened.classList.add("popup_opened");
    }
  });
}
OpenPopupCard();

// Функция лайка карточки
function likeCard() {
  cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("element__button-like")) {
      event.target.classList.toggle("element__button-like_active");
    }
  });
}
likeCard();

// Функция удаления карточки
function trashButton() {
  cards.addEventListener("click", (event) => {
    if (event.target.classList.contains("element__button-trash")) {
      const eventTarget = event.target;
      const card = eventTarget.closest(".element");
      card.remove();
    }
  });
}
trashButton();

//Функция изменения Profile-элементов
function editProfileElement(event) {
  event.preventDefault();
  profileValueName.textContent = popupProfileName.value;
  profileValueDescription.textContent = popupProfileDescription.value;
  removePopup(popupProfile);
}

//Открытие попапа
function addPopup(popup) {
  popup.classList.add("popup_opened");
  popupProfileName.value = profileValueName.textContent;
  popupProfileDescription.value = profileValueDescription.textContent;
}

//Закрытие попапа
function removePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Слушатели откытие и закрытие попапов
profileEditButton.addEventListener("click", () => {
  addPopup(popupProfile);
});

profileAddButton.addEventListener("click", () => {
  addPopup(popupCard);
});

popupCloseButtonProfile.addEventListener("click", () => {
  removePopup(popupProfile);
});

popupCloseButtonCard.addEventListener("click", () => {
  removePopup(popupCard);
});

popupCloseButtonCardOpened.addEventListener("click", () => {
  removePopup(popupCardOpened);
});

//Слушатели отправки форм
popupContentProfile.addEventListener("submit", editProfileElement);
popupContentCard.addEventListener("submit", addCard);
