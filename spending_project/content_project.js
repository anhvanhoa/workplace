// account

var js_account = document.querySelector('.account-icon')
var js_account_img = document.querySelector('.account-img')
var js_crossbars = document.querySelectorAll('.crossbar')
var js_account_list = document.querySelector('.account-list')
var js_account_name = document.querySelector('.account-name')
var menu_ms = document.querySelector('.menu-ms')

js_account.addEventListener('click', () => {
    js_account_img.classList.toggle('account-img-mover')
    for(var js_crossbar of js_crossbars) {
        js_crossbar.classList.toggle('line')
    }
    js_account_list.classList.toggle('account-list1')
    js_account_name.classList.toggle('account-name-mover')
    menu_ms.classList.toggle('ms-switch')
    ms_search.classList.remove('on-flex')
    ms_account_list.classList.remove('on-flex')
    for(var ms_item of ms_items) {
        ms_item.classList.remove('off')
     }
})

// Menu


// Click

var menu_search = document.querySelector('.menu-search')
var menu_list = document.querySelector('.menu-list')
var search = document.querySelector('.search')
var icon_close = document.querySelector('.icon-close')

menu_search.addEventListener('click', () => {
    menu_list.classList.add('off')
    search.classList.add('item-search')
})

icon_close.addEventListener('click', () => {
    menu_list.classList.remove('off')
    search.classList.remove('item-search')
})

// Slider

var slider_img1 = document.querySelector('.slider-img1')
var slider_img2 = document.querySelector('.slider-img2')
var slider_img3 = document.querySelector('.slider-img3')
var radio = document.querySelectorAll('.radio')

radio[0].addEventListener('click', () => {

    if(slider_img1.classList.length == 2) {
    slider_img1.classList.add('presently')
    radio[0].classList.add('current-slider')
    radio[1].classList.remove('current-slider')
    slider_img2.classList.remove('presently')
    radio[2].classList.remove('current-slider')
    slider_img3.classList.remove('presently')
    } else {
        slider_img1.classList.add('presently')
        radio[0].classList.add('current-slider')
        radio[1].classList.remove('current-slider')
        slider_img2.classList.remove('presently')
        radio[2].classList.remove('current-slider')
        slider_img3.classList.remove('presently')
    }

})

radio[1].addEventListener('click', () => {
    if(slider_img2.classList.length == 2) {
        slider_img2.classList.add('presently')
        radio[1].classList.add('current-slider')
        slider_img1.classList.remove('presently')
        radio[0].classList.remove('current-slider')
        radio[2].classList.remove('current-slider')
        slider_img3.classList.remove('presently')
        } else {
            slider_img2.classList.add('presently')
            radio[1].classList.add('current-slider')
            slider_img1.classList.remove('presently')
            radio[0].classList.remove('current-slider')
            radio[2].classList.remove('current-slider')
            slider_img3.classList.remove('presently')
        }
})

radio[2].addEventListener('click', () => {
    if(slider_img3.classList.length == 2) {
        slider_img3.classList.add('presently')
        radio[2].classList.add('current-slider')
        slider_img1.classList.remove('presently')
        radio[0].classList.remove('current-slider')
        radio[1].classList.remove('current-slider')
        slider_img2.classList.remove('presently')
        } else {
            slider_img3.classList.add('presently')
            radio[2].classList.add('current-slider')
            slider_img1.classList.remove('presently')
            radio[0].classList.remove('current-slider')
            slider_img2.classList.remove('presently')
            radio[1].classList.remove('current-slider')
        }
})

// Auto

function Slide() {
    setTimeout(() => {
        if(slider_img1.classList.length == 2) {
            slider_img1.classList.add('presently')
            radio[0].classList.add('current-slider')
            radio[1].classList.remove('current-slider')
            slider_img2.classList.remove('presently')
            radio[2].classList.remove('current-slider')
            slider_img3.classList.remove('presently')
            } else {
                slider_img1.classList.add('presently')
                radio[0].classList.add('current-slider')
                radio[1].classList.remove('current-slider')
                slider_img2.classList.remove('presently')
                radio[2].classList.remove('current-slider')
                slider_img3.classList.remove('presently')
            }
    }, 4000)
    
    
    setTimeout(() => {
        if(slider_img2.classList.length == 2) {
            slider_img2.classList.add('presently')
            radio[1].classList.add('current-slider')
            slider_img1.classList.remove('presently')
            radio[0].classList.remove('current-slider')
            radio[2].classList.remove('current-slider')
            slider_img3.classList.remove('presently')
            } else {
                slider_img2.classList.add('presently')
                radio[1].classList.add('current-slider')
                slider_img1.classList.remove('presently')
                radio[0].classList.remove('current-slider')
                radio[2].classList.remove('current-slider')
                slider_img3.classList.remove('presently')
            }
    }, 9000)
    
    
    setTimeout(() => {
        if(slider_img3.classList.length == 2) {
            slider_img3.classList.add('presently')
            radio[2].classList.add('current-slider')
            slider_img1.classList.remove('presently')
            radio[0].classList.remove('current-slider')
            radio[1].classList.remove('current-slider')
            slider_img2.classList.remove('presently')
            } else {
                slider_img3.classList.add('presently')
                radio[2].classList.add('current-slider')
                slider_img1.classList.remove('presently')
                radio[0].classList.remove('current-slider')
                slider_img2.classList.remove('presently')
                radio[1].classList.remove('current-slider')
            }
    }, 15000)
}

Slide()

setInterval(() => {
    Slide()
}, 15000)
  

// Relax

var feels = document.querySelectorAll('.feel')
var icon_feels = document.querySelectorAll('.icon-feel')

function Feel(e) {
    e.target.classList.toggle('red')
}
for(icon_feel of icon_feels) {
icon_feel.addEventListener('click', Feel)
}

//copy

var icon_shares = document.querySelectorAll('.icon-share')
var share = document.querySelector('.share')
var close = document.querySelector('.close')
var overlay = document.querySelector('.overlay')
var icon_cp =  document.querySelector('.icon-cp')
var icon_check = document.querySelector('.icon-check')
var input_copy = document.querySelector(".input-copy")


for(var icon_share of icon_shares) {
    icon_share.addEventListener('click', (e) => {
        share.classList.add('on')
    })
}

close.onclick = () => {
    share.classList.remove('on')
}

overlay.onclick = () => {
    share.classList.remove('on')
}

icon_cp.onclick = () => {
    input_copy.select();
    icon_cp.classList.add('off')
    icon_check.classList.add('on')
    setTimeout(() => {
        window.getSelection().removeAllRanges();
        icon_cp.classList.remove('off')
        icon_check.classList.remove('on')
    }, 4000)
}

// search ms

var ms_items = document.querySelectorAll('.ms-item')
var ms_item_search = document.querySelector('.ms-item-search')
var ms_search = document.querySelector('.ms-search')
var ms_icon_closes = document.querySelectorAll('.ms-icon-close')
var ms_item_profile = document.querySelector('.ms-item-profile')
var ms_account_list = document.querySelector('.ms-account-list')

ms_item_search.onclick = () => {
    for(var ms_item of ms_items) {
       ms_item.classList.add('off')
    }
    ms_search.classList.add('on-flex')
}

for(var ms_icon_close of ms_icon_closes) {
    ms_icon_close.addEventListener('click', () => {
        ms_search.classList.remove('on-flex')
        ms_account_list.classList.remove('on-flex')
        for(var ms_item of ms_items) {
            ms_item.classList.remove('off')
         }
    })
}

ms_item_profile.onclick = () => {
    for(var ms_item of ms_items) {
        ms_item.classList.add('off')
     }
     ms_account_list.classList.add('on-flex')
}