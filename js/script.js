var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var isStorageSupport = true;
var storageName = "";
var storageEmale = "";

try {
  storageName = localStorage.getItem("login");
  storageEmale = localStorage.getItem("emale");
} catch {
  isStorageSupport = false;
}

if (popup) {
  var closePopup = popup.querySelector(".button-close");
  var login = popup.querySelector("#name");
  var form = popup.querySelector(".write-us-form");
  var emale = popup.querySelector("#e-male");
  var textMessage = popup.querySelector("#message-text");
}

if (link && login && emale && textMessage) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-write-us-inactive");
    if (storageName && storageEmale) {
      login.value = storageName;
      emale.value = storageEmale;
      textMessage.focus();
    } else {
      login.focus();
    }
  });
}

if (closePopup) {
  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-write-us-inactive");
    popup.classList.remove("modal-error");
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!login.value || !emale.value || !textMessage.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("emale", emale.value);
      }
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("modal-write-us-inactive");
    popup.classList.remove("modal-error");
  }
});

var linkMap = document.querySelector(".map");
var popupMap = document.querySelector(".modal-map");

if (popupMap) {
  var closeMap = popupMap.querySelector(".button-close");
}

if (linkMap) {
  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-inactive");
  });
}

if (closeMap) {
  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-inactive");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-inactive");
  }
});

var linksAddCart = document.querySelectorAll(".button-buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".button-close");
var continueBuy = popupCart.querySelector(".white-button");

for (var i = 0; i < linksAddCart.length; i++) {
  var linkAddCart = linksAddCart[i];
  linkAddCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-cart-inactive");
  });
}

closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.add("modal-cart-inactive");
});

continueBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.add("modal-cart-inactive");
});
