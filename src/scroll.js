/**
 * @author  Daniel Nicolas Gisolfi <Daniel.Gisolfi1@marist.edu>
 * @version 1.0.0
 * @license The MIT License (MIT)
 */ 

const fade = () => {
    let scroll =  window.pageYOffset + (window.innerHeight / 3);
    
    const panels = Array.from(document.querySelectorAll('.panel')) 

    panels.map(panel => {
        if (panel.offsetTop <= scroll && panel.offsetTop + panel.offsetHeight > scroll) {
            const body = document.body;
            const match = (body.className.match(/(^|\s)color-\S+/g) || []).join(' ')
        
            if (match != "") {
                body.classList.remove(match)
            }            
            body.classList.add('color-' + panel.id);
        }
    });
}

document.addEventListener('scroll',  fade);