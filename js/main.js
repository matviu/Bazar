window.onload = function() {

  (function loginPopup() {

    var btnLoginOpen = document.querySelector('.user-block__login');
    var btnLoginClose = document.querySelector('.login__close');
    var popupLogin = document.querySelector('.login-wrapper');
    var cover = document.querySelector('.cover');
    var loginField = popupLogin.querySelector('[name=login]');

    btnLoginOpen.onclick = showPopup;

    btnLoginClose.onclick = closePopup;

    window.addEventListener("keydown", function() {
      console.log(event)
      if(event.keyCode == 27 && popupLogin.classList.contains("login-wrapper--show")) {
         closePopup();
      }
    })

    function showPopup() {
      event.preventDefault();
      popupLogin.classList.add("login-wrapper--show")
      cover.classList.add("cover--show");
      loginField.focus();
    }

    function closePopup() {
      event.preventDefault();
      popupLogin.classList.remove("login-wrapper--show")
      cover.classList.remove("cover--show");
      loginField.blur();
    }

  })();

  (function mainMenu() {

    var btnToggle = document.querySelector('.main-menu__toggle');
    var menu = document.querySelector('.main-menu__list');
    var menuWrapper = document.querySelector('.main-menu__list-wrapper');

    btnToggle.onclick = toggleMenu;

    function toggleMenu() {
      event.preventDefault();
      menu.classList.toggle('main-menu__list--show');
      btnToggle.classList.toggle('main-menu__toggle--opened');
      menuWrapper.classList.toggle('main-menu__list-wrapper--show');
    }

  })();

  (function mainCart() {

    var btnToggle = document.querySelector('.main-cart__toggle');
    var cartList = document.querySelector('.main-cart__list');
    var cartListWrapper = document.querySelector('.main-cart__list-wrapper');

    btnToggle.onclick = toggleCartList;

    function toggleCartList() {
      event.preventDefault();
      cartList.classList.toggle('main-cart__list--show');
      btnToggle.classList.toggle('main-cart__toggle--opened');
      cartListWrapper.classList.toggle('main-cart__list-wrapper--show');
    }

  })();





}
