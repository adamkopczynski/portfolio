import React, {useState} from 'react';
import classnames from 'classnames';

const Header = () => {

    const [scrolled, setScrolled] = useState(window.scrollY > 50);

    document.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
    document.addEventListener('resize', () => {
        const pageNav = document.querySelector('.page-header');

        if(window.innerWidth > 768){
            pageNav.style.display = 'flex';
        }
    })

    // Grab all the scroll class anchor elements, use whatever class you like
    const menuItems = document.querySelectorAll('.menu-item');

    const scroll = (elem) => {
        elem.addEventListener('click',function(e) {
            e.preventDefault();
            
            // 1. Get the element id to which you want to scroll
            const scrollElemId = elem.href.split('#')[1];
            
            // 2. find that node from the document
            const scrollEndElem = document.getElementById(scrollElemId);
            
            // 3. and well animate to that node.. 
            const anim = requestAnimationFrame((timestamp) => {
            const stamp = timestamp || new Date().getTime();
            const duration = 1200;
            const start = stamp;
            
            const startScrollOffset = window.pageYOffset;
            const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
            
            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            })
        })
    }

    menuItems.forEach(elem => scroll(elem));
    
    const easeInCubic = function (t) { return t*t*t }
 
    const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
        const runtime = currentTime - startTime;
        let progress = runtime / duration;
        
        progress = Math.min(progress, 1);
        
        const ease = easeInCubic(progress);
        
        window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
        if(runtime < duration){
            requestAnimationFrame((timestamp) => {
            const currentTime = timestamp || new Date().getTime();
            scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
            })
        }
    }

    function toggleMenu(){
        const pageNav = document.querySelector('.page-header');
        const toggleMenuButtonIcon = document.querySelector('.toggle-menu-btn > i.fas');
        const menu = document.querySelector('.menu.nav');
        const hidden = !toggleMenuButtonIcon.classList.contains('fa-times');
    
        menu.style.display = hidden ? 'flex' : 'none';
        pageNav.classList.toggle('open');
        toggleMenuButtonIcon.classList.toggle('fa-bars');
        toggleMenuButtonIcon.classList.toggle('fa-times');
    }

    return(
        <header className={classnames("page-header", {"scrolled": scrolled})}>
            <div className="row justify-content-between">
                <div className="col-sm-10 col-md-4 nav-row">
                    <a className="logo" href="https:\adamkopczynski.github.io" title="Adam Kopczynski - Junior React Developer">
                        Adam Kopczynski
                    </a>
                    <button className="toggle-menu-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="col-md-8 col-sm-12">
                    <nav className="page-nav ">
                        <ul className="menu nav justify-content-end">
                            <li><a href="#home" className="menu-item">Home</a></li>
                            <li><a href="#about" className="menu-item">About me</a></li>
                            <li><a href="#portfolio" className="menu-item">Portfolio</a></li>
                            <li><a href="#skills" className="menu-item">Skills</a></li>
                            <li><a href="#contact" className="menu-item">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;