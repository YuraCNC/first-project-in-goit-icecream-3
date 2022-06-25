document.getElementById('btnFirst').onclick = function () {
  document
    .getElementById('description-first')
    .classList.toggle('description-option');
  this.classList.toggle('rotate');
};
document.getElementById('btnSecond').onclick = function () {
  document
    .getElementById('description-second')
    .classList.toggle('description-option');
  this.classList.toggle('rotate');
};
document.getElementById('btnThird').onclick = function () {
  document
    .getElementById('description-third')
    .classList.toggle('description-option');
  this.classList.toggle('rotate');
};
