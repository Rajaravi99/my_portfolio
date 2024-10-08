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
    const link="https://api.api-ninjas.com/v1/quotes?category=happiness";
    let text=document.querySelector(".about-col-1 .link");
    let response=await fetch(link,{mode:'no-cors'});
    if(!response.ok) {
        console.log(response.body);
        alert('error while calling api');
    }
    else{
        const json = await response.json();
        const rndInt = Math.floor(Math.random() * data.length) + 1;
        text.innerHTML=JSON.stringify(data[rndInt].text);
    }
};
// attaching blog page while the use clicks on blogs
let doc=document.querySelector(".link #blogs");
const goToBlogs=async ()=>{
    window.location.href='https://blogsite-r2mj.onrender.com';
};
// making various events
const tag=document.querySelector('body');
tag.addEventListener("click", (event) => {
    const audio=new Audio();
    audio.src='./images/mouseClick.mp3';
    event.target=audio.play();
},true);

let myDiv=document.querySelector('#my-div');
document.addEventListener('mousemove',(event)=>{
    let x=event.pageX;
    let y=event.pageY;
    myDiv.style.left=x-20+'px';
    myDiv.style.top=y-20+'px';
});





