/* add code here */
window.addEventListener('load', function () {// creating event handler after loading window
        //changing image size on clicking and showing their figure caprtion.
    var imageClick = document.querySelectorAll('#thumbnails img');
    var i = 0;
    while (i < imageClick.length) {
        imageClick[i].addEventListener("click", function () {
            var splited = event.target.src.split("images/small/");
            document.querySelector("#featured>img").src = "images/medium/" + splited[1];
            document.querySelector("#featured>img").title = event.target.title;
            document.querySelector("#featured>img").alt = event.target.alt;
            var figuretitle = document.querySelector("#featured > figcaption")
            figuretitle.style.opacity = "75%";
            figuretitle.innerHTML = event.target.title;
        })
        i++;
    }

})