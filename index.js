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
