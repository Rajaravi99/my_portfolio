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
// popup on pageload
lightBoxClose = function() {
    document.querySelector(".lightbox").classList.add("closed");
}
// data collection when form is submitted
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
}