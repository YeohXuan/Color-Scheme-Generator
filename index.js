document.getElementById("get-scheme-btn").addEventListener("click", () => {
    const selectedColor = document.getElementById("selected-color").value.substring(1);
    const selectedColorScheme = document.getElementById("color-scheme").value.toLowerCase();

    fetch(`https://www.thecolorapi.com/scheme?mode=${selectedColorScheme}&hex=${selectedColor}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 1; i <= 5; i++) {
                document.getElementById(`scheme-${i}`).style.backgroundColor = data.colors[i - 1].hex.value;
                document.getElementById(`hex-${i}`).textContent = data.colors[i - 1].hex.value;
            }
        })
})

document.addEventListener("click", e => {
    if (e.target.classList.contains("scheme")) {
        const schemeNumber = e.target.id.substring(7);
        const hexValue = document.getElementById(`hex-${schemeNumber}`);
        navigator.clipboard.writeText(hexValue.textContent);
        document.getElementById("copy-text").style.display = "flex";
        setTimeout(() => {
            document.getElementById("copy-text").style.display = "none";
        }, 800)
    }
})