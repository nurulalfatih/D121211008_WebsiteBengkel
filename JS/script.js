// toggle hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// toggle shopping-cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

const menu =  document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-button');
const cart = document.querySelector('#shopping-cart-button');


document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    

    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    

    if(!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// box detail
const itemDetail = document.querySelector('#item-detail');
const itemDetailButtons = document.querySelectorAll('.detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetail.style.display ='flex';
        e.preventDefault();
    };
});
// klik close box detail
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetail.style.display ='none';
    e.preventDefault();
};
window.onclick = (e) => {
    if (e.target === itemDetail) {
        itemDetail.style.display = 'none';
    }
};




// box detail 2
const itemDetail2 = document.querySelector('#item-detail2');
const itemDetailButtons2 = document.querySelectorAll('.detail-button2');

itemDetailButtons2.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetail2.style.display ='flex';
        e.preventDefault();
    };
});
// klik close box detail
document.querySelector('.modal2 .close-icon2').onclick = (e) => {
    itemDetail2.style.display ='none';
    e.preventDefault();
};
window.onclick = (e) => {
    if (e.target === itemDetail2) {
        itemDetail2.style.display = 'none';
    }
};




// box detail 3
const itemDetail3 = document.querySelector('#item-detail3');
const itemDetailButtons3 = document.querySelectorAll('.detail-button3');

itemDetailButtons3.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetail3.style.display ='flex';
        e.preventDefault();
    };
});
// klik close box detail
document.querySelector('.modal3 .close-icon3').onclick = (e) => {
    itemDetail3.style.display ='none';
    e.preventDefault();
};
window.onclick = (e) => {
    if (e.target === itemDetail3) {
        itemDetail3.style.display = 'none';
    }
};



// box detail 4
const itemDetail4 = document.querySelector('#item-detail4');
const itemDetailButtons4 = document.querySelectorAll('.detail-button4');

itemDetailButtons4.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetail4.style.display ='flex';
        e.preventDefault();
    };
});
// klik close box detail
document.querySelector('.modal4 .close-icon4').onclick = (e) => {
    itemDetail4.style.display ='none';
    e.preventDefault();
};
window.onclick = (e) => {
    if (e.target === itemDetail4) {
        itemDetail4.style.display = 'none';
    }
};