// var form_login  = document.querySelector('.form-login')
// var form_register  = document.querySelector('.form-register')
// form_login.classList.toggle('off')
// form_register.classList.toggle('off')


// Move form

var form_moves = document.querySelectorAll('.form-move')
var container  = document.querySelector('.container')

for(form_move of form_moves) {
    form_move.onclick = () => {
        container.classList.toggle('container-move')
    }
}


// logic login or register

logic({
    form: '#form-register',
    rules: [
        logic.isRequired ('#full-name', 'vui long nhap ten day du'),
        logic.isRequired ('#email-register'),
        logic.isEmail ('#email-register'),
        logic.minLength ('#password-register', 6),
        logic.isRequired ('#confirm-password'),
        logic.isConfirm ('#confirm-password', function () {
            return document.querySelector('#form-register #password-register').value
        }, 'mat khau nhap lai khong chinh xac'),
    ]
})