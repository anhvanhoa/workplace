var crossbars = document.querySelectorAll('.crossbar')
var icon_menu = document.querySelector('.icon-menu')
var box_menu = document.querySelector('.box-menu')
var box_content = document.querySelector('.box-content')
var menu = document.querySelector('.menu')
icon_menu.onclick = () => {
    for (var crossbar of crossbars) {
        crossbar.classList.toggle('line')
    }
    
    if(box_menu.classList[1] !== 'box-menu-move') {
        setTimeout(() =>{
            box_content.classList.toggle('box-content-move')
        }, 350)
        box_menu.classList.toggle('box-menu-move')
        setTimeout(() => {
            menu.classList.toggle('menu-move')
        }, 350)
    } else {
        box_content.classList.toggle('box-content-move')
        setTimeout(() => {
            menu.classList.toggle('menu-move')
            setTimeout(() => {
                box_menu.classList.toggle('box-menu-move')
            }, 50)
        }, 300)
    }
} 
   
//move account

var icon_notify = document.querySelector('.icon-notify')
var box_notify = document.querySelector('.box-notify')
var img_profile = document.querySelector('.img-profile')
var box_profile = document.querySelector('.box-profile')

icon_notify.onclick = () => {
    box_notify.classList.toggle('hidden')
    box_notify.classList.toggle('box-notify-move')
    if(box_profile.classList[1] == 'profile-move') {
    box_profile.classList.remove('profile-move')
    }
}   

img_profile.onclick = () => {
    box_profile.classList.toggle('profile-move')
    if(box_notify.classList[2] == 'box-notify-move') {
        box_notify.classList.remove('box-notify-move')
        box_notify.classList.remove('hidden')
        }
}



var link_menu = document.querySelector('.link-menu')

    link_menu.onclick = () => {
        console.log(this.link_menu.nextSibling)
        document.querySelector('.task').classList.toggle('task-move')
    }

// mode

var color_mode = document.querySelector('body')
var mode_color = document.querySelector('.mode-color')
var icon_mode = document.querySelector('.icon-mode')
var text_mode = document.querySelector('.text-mode')

mode_color.onclick = () => {
    color_mode.classList.toggle('color-dark')
    icon_mode.classList.toggle('fa-moon')
    icon_mode.classList.toggle('fa-sun')
    if(icon_mode.classList[2] == 'fa-sun') {
        text_mode.innerText = ('Light mode')
    } else {
        text_mode.innerText = ('Dark mode')
    }
}

// add "," of number
var numbers = document.querySelectorAll('.number')

function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

for(number of numbers) {
    number.innerText = toCommas(number.innerText)
}

// copy

var icon_cps = document.querySelectorAll('.cp')

for(var i = 0; i < icon_cps.length; i++) {
  icon_cps[i].onclick = (e) => {
      var cp = e.target.previousElementSibling
      navigator.clipboard.writeText(cp.value)
      cp.select()
      e.target.classList.remove('fa-copy')
      e.target.classList.add('fa-circle-check')
      setTimeout(() => {
          
      e.target.classList.add('fa-copy')
      e.target.classList.remove('fa-circle-check')
      window.getSelection().removeAllRanges()
      }, 3000)
    }
}

// view / not view
var not_views = document.querySelectorAll('.not-view')
var text_not_view = 'Not view' 

for(not_view of not_views) {
    not_view.innerText = text_not_view
}

// edit profile

var icon_heading_profiles = document.querySelectorAll('.icon-heading-profile')
var input_individuals = document.querySelectorAll('.text input')

for(icon_heading_profile of icon_heading_profiles) {
    icon_heading_profile.onclick = () => {
        for(input_individual of input_individuals) {
            input_individual.removeAttribute("disabled")
            input_individual.style.borderBottom = ('var(--000-f) solid 1px')
            btn_save.style.display = ('block')
        }
    }
}

var message = document.querySelector('.message')

setInterval(() => {
    message.innerHTML = `
<i class="fa-solid fa-phone"></i>
`
    setTimeout(() => {
        message.innerHTML = `
        <i class="fa-solid fa-message"></i>
`
    }, 2000)
}, 4000)


var mode_mobile = document.querySelector('.mode-mobile') 

mode_mobile.onclick = () => {
    mode_color.onclick()
}

var notify_mobile = document.querySelector('.notify-mobile')
var box_notify_mobile = document.querySelector('.box-notify-mobile')
notify_mobile.onclick = () => {
    box_notify_mobile.classList.toggle('off')
}

var layout_mobile = document.querySelector('.layout-mobile')
var box_layout = document.querySelector('.box-layout')

layout_mobile.onclick = () => {
    box_layout.classList.toggle('off')
}

var item_layout_task = document.querySelector('.item-layout-task')
var box_layout_task = document.querySelector('.box-layout-task')

item_layout_task.onclick = () => {
    box_layout_task.classList.toggle('off')
}

var link_logout = document.querySelector('.link-logout')
var account = document.querySelector('.account')
var login =document.querySelector('.login')

link_logout.onclick = () => {
    account.classList.toggle('off')
    login.classList.toggle('off')
}