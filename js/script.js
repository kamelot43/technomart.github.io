var link = document.getElementById("open-form");

/*работа с покупками*/

var popupCart = document.querySelector(".popup--cart");
var linksBuy = document.querySelectorAll(".btn-product--buy");
var closeBuy = popupCart.querySelector(".popup__close--cart");
var continueBuy = popupCart.querySelector(".continue");

if (link) {
  var popupForm = document.querySelector(".popup--form");
  var login = popupForm.querySelector("[name=popup-name]");
  var email = popupForm.querySelector("[name=popup-mail]");
  var storage = localStorage.getItem("login");
  var form = popupForm.querySelector("form");
  var closeForm = popupForm.querySelector(".popup__close--form");

  /*Карта*/
  var mapLink = document.querySelector(".delivery__map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-map__close");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.add("modal-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });

  closeForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.remove("modal-show");
    popupForm.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popupForm.classList.remove("modal-error");
      popupForm.offsetWidth = popupForm.offsetWidth;
      popupForm.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popupForm.classList.contains("modal-show")) {
        popupForm.classList.remove("modal-show");
        popupForm.classList.remove("modal-error");
      }
    }
  });

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

/*работа с покупками*/

for (var i = 0; i < linksBuy.length; i++) {
  linksBuy[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupCart.classList.add("modal-show");
  });
}

closeBuy.addEventListener("click", function(event) {
  event.preventDefault();
  popupCart.classList.remove("modal-show");
});

continueBuy.addEventListener("click", function(event) {
  event.preventDefault();
  popupCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupCart.classList.contains("modal-show")) {
      popupCart.classList.remove("modal-show");
    }
  }
});
