(function(){
  'use strict';

    const btn = document.querySelector(".top-menu__toggler");
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector(".top-menu");

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


})();
