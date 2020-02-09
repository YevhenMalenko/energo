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

  let button = document.querySelector('.top__btn'),
        modalForm = document.getElementById('modal'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.modal-close');

    button.addEventListener('click', function () {
            overlay.style.display = 'block';
            modalForm.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

    close.addEventListener('click', function () {
            overlay.style.display = 'none';
            modalForm.style.display = 'none';
            document.body.style.overflow = '';
        });
});