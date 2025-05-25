let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let  lowercase= document.getElementById("lowercase");
let  uppercase= document.getElementById("uppercase");
let  Numbers= document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let getBtn = document.getElementById("getBtn");
let copyIcon = document.getElementById("copyIcon");

//showing input slider value
slidervalue.textContent = inputslider.Value;
inputslider.addEventListener('input',() => {
    slidervalue.textContent = inputslider.value;
});

getBtn.addEventListener('click',() => {
    passbox.value = generatePassword();
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "!@#$%^&*~";
//function to generate password

function generatePassword(){
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars :"";
    allchars += uppercase.checked ? upperchars :"";
    allchars += Numbers.checked ? allnumbers :"";
    allchars += Symbols.checked ? allsymbols :"";

    if(allchars == "" || allchars.length == 0){
        return genPassword;
    }
let i=1;
while(i<=inputslider.value){
    genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
}
    return genPassword;
}

copyIcon.addEventListener('click',() => {
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText="Check";
    copyIcon.title="Password Copied";
});

setTimeout(() => {
    copyIcon.innerHTML = "content_copy";
    copyIcon.title = "";
}, 2000);





