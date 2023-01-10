let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');

    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}

const scriptURL='https://script.google.com/macros/s/AKfycbx4g1p5BiUzEUIwa8qkMWU9zMJgoxHlCjzNbAxiZFEbC_JAmORHKBuTII5Jn-QObSvw/exec';
const form = document.forms['orderlist'];
	  
form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL,{method: 'POST',body: new FormData(form)})
	.then(response => alert("You have successfully submitted."))
	.catch(error => console.error('Error!',error.message))
})