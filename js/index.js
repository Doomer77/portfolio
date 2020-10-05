let aboutOpen = document.querySelector('.navigation__link--js'),
    aboutPopup = document.querySelector('.about'),
    closePopup = document.querySelector('.about__close'),
    feedbackWindowOpen = document.querySelector(".btn--js"),
    feedbackWindow = document.querySelector(".feedback"),
    feedbackWindowClose = document.querySelector(".form__close"),
    form = document.querySelector(".form"),
    submitForm = document.querySelector(".form__intro--js");
    
function toggle (window, open, close) {
  open.addEventListener('click', function(){
    window.classList.remove('hide'); 
    window.classList.add('show');  
  });
  
  close.addEventListener('click', function(){
    window.classList.remove('show'); 
    window.classList.add('hide');     
  });
}

toggle(aboutPopup, aboutOpen, closePopup);
toggle(feedbackWindow, feedbackWindowOpen, feedbackWindowClose);

form && form.addEventListener("submit", function(e) {
    e.preventDefault();
    var t = new FormData(form),
        n = {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: t.get("name"),
                organization: t.get("organization"),
                message: t.get("message")
            })
        };
    fetch("/send_post.php", n).then(function(e) {
        feedbackWindow.classList.remove("show"), 
        feedbackWindow.classList.add("hide"),
        submitForm.classList.add("show")
    }).catch(function(e) {
        return console.log('error')
    })
});
