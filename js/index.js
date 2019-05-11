var checkbox = $(".switch__checkbox");
var switcher = $(".switch__slider");
var body = $("body");
var audio = new Audio('bnk_of_nutn0n.mp3');

function $(el) {
  return document.querySelector(el);
}

Object.prototype.addClass = function (className) {
  this.classList.add(className);
};

Object.prototype.removeClass = function (className) {
  this.classList.remove(className);
};

Object.prototype.toggleClass = function (className) {
  this.classList.contains(className) ? this.removeClass(className) : this.addClass(className);
};

checkbox.addEventListener('change', function () {
  body.toggleClass("light-bg");
  audio.pause();
  audio.play();
});
