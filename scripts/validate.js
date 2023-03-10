const hiddenError = (errorElement, errorClassActive) => {
  errorElement.innerText = "";
  errorElement.classList.remove(errorClassActive);
};

const showError = (errorElement, message, errorClassActive) => {
  errorElement.innerText = message;
  errorElement.classList.add(errorClassActive);
};

// Проверка инпута на валидность
const toggleInputState = (inputElement, options) => {
  const { inputSelectorSet, inputErrorClass, errorClassActive } = options;
  const setElement = inputElement.closest(inputSelectorSet);
  const errorElement = setElement.querySelector(inputErrorClass);
  if (inputElement.validity.valid) {
    hiddenError(errorElement, errorClassActive);
  } else {
    showError(errorElement, inputElement.validationMessage, errorClassActive);
  }
};

// Включение кнопки
const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(inactiveButtonClass);
};

// Выключение кнопки
const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(inactiveButtonClass);
};

//Переключение кнопки сабмита
const toggleButtonState = (inputs, submitElement, inactiveButtonClass) => {
  const formIsValid = inputs.every((inputElement) => {
    return inputElement.validity.valid;
  });
  //  Проверка формы на валидность, если валидно - переключение кнопок
  if (formIsValid) {
    enableButton(submitElement, inactiveButtonClass);
  } else {
    disableButton(submitElement, inactiveButtonClass);
  }
};

// Кастомная валидация
const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));

  //Живая валидация
  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options.inactiveButtonClass);
    });
  });

  //  Проверка инпутов на валидность
  toggleButtonState(inputs, submitElement, options.inactiveButtonClass);
};

// Валидация на все формы
const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach((form) => {
    setEventListeners(form, options);
  });
};
// Включение валидации
// Все настройки классов и селекторов передаются в параметрах
enableValidation({
  formSelector: ".popup__content",
  submitButtonSelector: ".popup__save-button",
  inputSelector: ".popup__input",
  inputSelectorSet: ".popup__set",
  inputErrorClass: ".popup__input-error",
  errorClassActive: "popup__input-error_active",
  inactiveButtonClass: "popup__save-button_inactive",
});
