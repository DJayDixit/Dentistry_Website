document.querySelector(".contact").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
     
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    document.querySelector(".contact").reset();

    send(name, email, message);

}

function send(name, email, message){
    Email.send({
        SecureToken : "f197706a-7ad0-4d23-ae39-7ffe7e92b3e7",
        To : "ujd564@usask.ca",
        From : "jaydixit613@gmail.com",
        Subject : "This is the subject",
        Body : message
    }).then(
    message => alert(message)
);
}

// 3BEDD2978E16EA4F8B6BB47E948D0D4389B4
// smtp.elasticemail.com
// 2525
// f197706a-7ad0-4d23-ae39-7ffe7e92b3e7