const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target;

        if (entry.isIntersecting) {
            square.classList.add('entrance');
            console.log(square.id)
            return; // if we added the class, exit the function
        }
    });
});

for (const k of document.getElementsByClassName("displayAnimation")) {
    observer.observe(k);
}


window.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
        play()
    }
})

function play() {
    document.getElementsByClassName("play")[0].classList.toggle("hide")
    pageScroll()
    console.log(document.getElementsByClassName("play")[0].classList)
}

function pageScroll(height) {
    if (document.getElementsByClassName("play")[0].classList.contains("hide")) {
        return
    } else {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        let pos = window.scrollY;
        let slide = Math.floor(pos / window.innerHeight);

        window.scrollTo(0, window.innerHeight * ((slide + 1) % 14));

        let scrolldelay = setTimeout(pageScroll, 8000);

    }
}
