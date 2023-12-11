let form = document.forms.main;
let elements = document.forms.main.elements
let full_name = document.forms.main.elements.full_name;
let password = document.forms.main.elements.password;
let age = document.forms.main.elements.age;
let message = document.forms.main.elements.message;
let select = document.forms.main.elements.select;
let checkbox = document.forms.main.elements.agree;

let error = {
    full_name: 'Enter full name',
    password: 'Enter full password',
    age: 'Enter full age',
    message: 'Enter message',
    select: 'Enter select',
    agree: 'Agree or not',
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value === '') {
            elements[i].classList.add('error');
            elements[i].addEventListener('focus', function() {
                elements[i].classList.remove('error');
                elements[i].parentElement.querySelector('p.error').remove()
            });
            elements[i].insertAdjacentHTML('afterend', '<p class="error">' + error[elements[i].name] + '</p>');
        }
    }
})