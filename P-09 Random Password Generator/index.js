const generatebtnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

copyEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
    alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active")
    },2000)}
})


generatebtnEl.addEventListener("click",()=>{
    createPassword();
});

function createPassword(){
    const chars ="0123456789abcdefghijklmnopqrstuvwxyx!@#$%^&*()_+ABCDEFGHIJKLMONOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for(let index = 0 ; index < passwordLength ;index++){
        const randNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randNum , randNum + 1);
        
    }
    inputEl.value = password;
    alertEl.innerText = password + " copied!";
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value)
}
