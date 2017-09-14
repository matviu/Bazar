window.onload = function() {

  (function openLoginWindow() {

    var btnLoginOpen = document.querySelector('.user-block__login');
    var btnLoginClose = document.querySelector('.login__close');
    var popupLogin = document.querySelector('.login-wrapper');
    var cover = document.querySelector('.cover');
    var loginField = popupLogin.querySelector('[name=login]');

    btnLoginOpen.onclick = function() {
      event.preventDefault();
      popupLogin.classList.add("login-wrapper--show");
      cover.classList.add("cover--show");
      loginField.focus();

    }

    btnLoginClose.onclick = function() {
      event.preventDefault();
      popupLogin.classList.remove("login-wrapper--show");
      cover.classList.remove("cover--show");
    }

    window.addEventListener("keydown", function() {
      if(event.keyCode == 27 && popupLogin.classList.contains("login-wrapper--show")) {
        popupLogin.classList.remove("login-wrapper--show");
        cover.classList.remove("cover--show");
      }
    })


  })();

}
