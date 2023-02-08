//set the open button
const openbtn=document.querySelector(".open");
const show=document.querySelector(".overlay");
openbtn.addEventListener("click",function(){
    show.style.visibility="visible";
});

//set the close button
const closebtn=document.querySelector(".close");
closebtn.addEventListener("click", function(){
    show.style.visibility="hidden";
});