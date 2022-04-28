
const mobileMenu = document.querySelector('.mobile-menu')
const asideNav = document.getElementsByTagName('aside')[0]

mobileMenu.addEventListener('click', openMenu)

function openMenu() {
    if (asideNav.style.left == '-250px') {
        asideNav.style.left = '0px'
        asideNav.style.opacity = 1
        console.log('b')
    } else {
        asideNav.style.left = '-250px'
        asideNav.style.opacity = 0
        console.log('a')
    }
}

