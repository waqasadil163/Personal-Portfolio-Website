let links = document.getElementsByClassName('link');
let tabs = document.getElementsByClassName('tab');
let ul = document.getElementById('ul');

const tabf = function() {
    Array.from(tabs).forEach(e => {
        e.style.display = 'none';
    });
}

function openTab(tab, event) {
    for (let link of links) {
        link.classList.remove('active-link');
    }
    for (let tab of tabs) {
        tab.classList.remove('active-tab');
    }
    // tabf();
    event.currentTarget.classList.add('active-link');
    document.getElementById(tab).classList.add('active-tab');
}

function openMenu() {
    ul.style.right = 0;
}

function closeMenu() {
    ul.style.right = -75 + '%';
}

function openLink() {
    ul.style.right = -75 + '%';
    console.log('Executed');
}