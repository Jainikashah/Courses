// If user not sign-In alert:
if(localStorage.getItem('LoggedInUser') == 'none'){
    alert('Hey, you are not Signed In!');
}
   
// setting the heading:
const heading = document.getElementById('heading');
let loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
heading.innerHTML = `Welcome ${loggedInUser.username}!`;

   
// sign-out btn functionality:
const signOutBtn = document.getElementById('signOutBtn');
signOutBtn.addEventListener('click', e => {
    loggedInUser = 'none';
    localStorage.setItem('LoggedInUser',loggedInUser);
})


        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000);
        }
