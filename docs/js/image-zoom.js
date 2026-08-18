document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("article img");

    images.forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.background = "rgba(0,0,0,0.85)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = 9999;

            const bigImg = document.createElement("img");
            bigImg.src = img.src;
            bigImg.style.maxWidth = "95%";
            bigImg.style.maxHeight = "95%";
            bigImg.style.boxShadow = "0 0 25px black";
            bigImg.style.borderRadius = "6px";

            overlay.appendChild(bigImg);

            overlay.addEventListener("click", () => overlay.remove());

            document.body.appendChild(overlay);
        });
    });
});
