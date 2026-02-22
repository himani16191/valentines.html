const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// No button runs away
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Yes button click
yesBtn.addEventListener("click", function() {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:200px;">
            <h1 style="color:#ff4d6d;">
            awwwwwwwwwww!!!
            Yayyy!! ❤️ I love you so much 😍</h1>
        </div>
    `;
});
