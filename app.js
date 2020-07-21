

// ini buat links

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const barNav = document.getElementsByClassName('bar-nav')[0]

toggleButton.addEventListener('click', () => {
    barNav.classList.toggle('active');
});


// ini untuk javasript bagian slider gambar di homepage

const slide = document.querySelector('.slide');
const image = document.querySelectorAll('.slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = image[0].clientWidth;

slide.style.transform = 'translateX('+ (-size * counter) + 'px)';

//button listener

nextBtn.addEventListener('click', () =>{
    if(counter >= image.length -1) return;

    slide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slide.style.transform = 'translateX('+ (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if(counter <= 0 ) return 0;

    slide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slide.style.transform = 'translateX('+ (-size * counter) + 'px)';

});

slide.addEventListener('transitionend', () => {
    if(image[counter].id ==='lastClone'){
        slide.style.transition = "none";
        counter = image.length - 1;
        slide.style.transform = 'translateX('+ (-size * counter) + 'px)';

    }

    if(image[counter].id ==='firstClone'){
        slide.style.transition = "none";
        counter = image.length - counter;
        slide.style.transform = 'translateX('+ (-size * counter) + 'px)';

    }

})

// ini untuk validasi ketika signup

var varName = document.getElementsById('Name');
var varEmail = document.getElementsById('E-mail');
var varPassword = document.getElementsById('Password');
var varCountry = document.getElementsById('Country');
var varAddress = document.getElementsById('Address');

function Validation (){
    var flag = true;

    if(varName!="" && varEmail!="" && varPassword!="" && varCountry!="" && varAddress!=""){
        return true;
    }

    else{
        alert('You must input your data first !');
    }

    if(varName.value === null || varName.value === '' || varName.value.length< 10){
        $("#nameWarning").css('display', 'block');            
        flag = false;
    }
    else{
        $("#nameWarning").css('display', 'none');      
    }

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;

    if (!varName.value.match(letters)) {
        $("#nameWarning2").css('display', 'block');            
        flag = false;
    } else {
        $("#nameWarning2").css('display', 'none');            
    }

    if(!varCountry.value == ''){
        $("#typeWarning").css('display', 'block');            
        flag = false;
    }
    else {
        $("#typeWarning").css('display', 'none');            
    }

    if (varAddress.value.length == null || varAddress.value.length == '' || varAddress.value.length < 5) {
        $("#addressWarning").css('display', 'block');            
        flag = false;
    } else {
        $("#addressWarning").css('display', 'none');            
    }

    if (flag) {
        confirm(`Name : ${varName.value}\nE-mail : ${varEmail.value}\nPassword : ${varPassword.value}\nCountry : ${varCountry.value}\n Address : ${varAddress.value}`);

        var additionalMsg = prompt('Input additional message for this order');

        if (additionalMsg === null || additionalMsg === '') {
            alert('Thanks for you purchase!');
        } else {
            alert('Your message has been saved. Thanks for your purchase!');
        }
    }

}
