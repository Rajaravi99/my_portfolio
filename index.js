lightBoxClose = function() {
    document.querySelector(".lightbox").classList.add("closed");
}
let tabLinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");
function  openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
function collectData(){
    let userName = document.getElementById('Name').value;
    let phone = document.getElementById('Number').value;
    let email = document.getElementById('Email').value;
    let message = document.getElementById('Message').value;
    let messageBody = "Name : " + userName + "<br/> Phone : " + phone + "<br/> Email : " + email + "<br/> Message : " + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ravinandanray99@gmail.com",
        Password : "2561EFA946BA99D8DDCDE91C2B135C7B6689",
        To : 'ravinandanray99@gmail.com',
        From : "ravinandanray99@gmail.com",
        Subject : "Someone filled my portfolio contact form",
        Body : messageBody
    }).then(
      message => {
        if(message=='OK'){
            swal("Secussfuly sent", "You clicked the button!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "error");
        }
      }
    );
};
const changeQuote=async ()=>{
    let data=[
        'The greatest glory in living lies not in never falling, but in rising every time we fall',
        'The way to get started is to quit talking and begin doing',
        'Make it quick make it fast, make it work',
        'Programming isn’t about what you know; it’s about what you can figure out',
        'Code is read much more often than it is written',
        'You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity',
        'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it',
        'Code is like humor. When you have to explain it, it’s bad',
    ];
    let text=document.querySelector(".about-col-1 .link");
    const rndInt = Math.floor(Math.random() * data.length);
    text.innerHTML=(data[rndInt]);
};
// attaching blog page while the use clicks on blogs
let doc=document.querySelector(".link #blogs");
const goToBlogs=async ()=>{window.location.href='https://blogsite-r2mj.onrender.com';};
// making various events
const tag=document.querySelector('body');
tag.addEventListener("click", (event) => {
    const audio=new Audio();
    audio.src='./images/mouseClick.mp3';
    event.target=audio.play();
},true);

// let myDiv=document.querySelector('#my-div');
// document.addEventListener('mousemove',(event)=>{
//     let x=event.pageX;
//     let y=event.pageY;
//     myDiv.style.left=x-20+'px';
//     myDiv.style.top=y-20+'px';
// });


// creating cursor follower
 let myDiv = document.querySelector("#my-div");
//For mouse
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
});
//For touch
document.addEventListener("touchmove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
});




