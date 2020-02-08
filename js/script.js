window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let burger = document.querySelector('.menu__btn'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu a');

  burger.addEventListener('click', function () {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
      menuItem.forEach(function(item) {
          item.addEventListener('click', function() {
              burger.classList.remove('active');
              menu.classList.remove('active');
              document.body.classList.remove('lock');
          });
      });
  });

});