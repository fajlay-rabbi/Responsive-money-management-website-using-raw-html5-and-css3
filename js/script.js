const btn = document.getElementById('myHamBtn');
const backdrop = document.getElementById('backdrop');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => { 
    const isOpen = btn.getAttribute('aria-expanded');
    if (isOpen === 'false') { 
        btn.setAttribute('aria-expanded', 'true');
        backdrop.setAttribute('data-toggle', 'true');
        sidebar.setAttribute('data-toggle', 'true');
        document.body.classList.add('nav-backdrop-active');
    }
    else { 
        btn.setAttribute('aria-expanded', 'false');
        backdrop.setAttribute('data-toggle', 'false');
        sidebar.setAttribute('data-toggle', 'false');
        document.body.classList.remove('nav-backdrop-active');
    }
});

const backdropClickHandler = () => { 
    const isOpen = btn.getAttribute('aria-expanded');
    if (isOpen === 'true') { 
        btn.setAttribute('aria-expanded', 'false');
        backdrop.setAttribute('data-toggle', 'false');
        sidebar.setAttribute('data-toggle', 'false');
        document.body.classList.remove('nav-backdrop-active');
    }
}