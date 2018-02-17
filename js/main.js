(function(){
  'use strict';

    const btn = document.querySelector(".top-menu__toggler");
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".top-menu");
    const menuList = document.querySelectorAll(".menu-item");

    btn.addEventListener('click', function(){
      let icon = this.childNodes[0].classList.toString();
      dropdown.classList.toggle('hidden');
      dropdown.classList.toggle('open');
      menu.classList.toggle('open');
      let iconClass = icon.includes('fa-bars') ? 'fa-times' : 'fa-bars';

      this.childNodes[0].classList = iconClass;
    });

    function changeMenuBg(){
      if(window.scrollY >= 50){
        menu.classList.add('scrolled');
      }
      else{
        menu.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', changeMenuBg);
    window.addEventListener('load', changeMenuBg);

    function showMenu(){
      if(window.innerWidth >= 768){
        dropdown.classList.remove('hidden');
      }
      else{
        dropdown.classList.add('hidden');
      }
    }
    function changeClass(){
      menuList.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    }

    menuList.forEach(link => link.addEventListener('click', changeClass));

    window.addEventListener('load', showMenu);
    window.addEventListener('resize', showMenu);


})();
