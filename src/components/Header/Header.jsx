import React, {useState} from 'react';
import classnames from 'classnames';

const Header = () => {

    const [scrolled, setScrolled] = useState(window.scrollY > 50);

    document.addEventListener('scroll', () => setScrolled(window.scrollY > 50));

    // Grab all the scroll class anchor elements, use whatever class you like
    const menuItems = document.querySelectorAll('.menu-item');
        // Now add an event listeners to those element
        menuItems.forEach(elem => {
                
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
    });
    
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

    return(
        <header className={classnames("page-header", {"scrolled": scrolled})}>
            <div className="row justify-content-between">
                <div className="col-sm-6 col-md-4">
                    <a className="logo" href="https:\adamkopczynski.github.io" title="Adam Kopczynski - Junior React Developer">
                        Adam Kopczynski
                    </a>
                </div>
                <div className="col-md-8">
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