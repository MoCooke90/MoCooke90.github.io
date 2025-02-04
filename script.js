document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
        const selectedColor = e.target.dataset.color;

      
        const productImage = document.getElementById('product-img');
        productImage.src = `product-${selectedColor}.jpg`; 

      
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
        e.target.classList.add('selected');
    });
});




const container = document.querySelector('.product-image');
const img = document.getElementById("product-img");

container.addEventListener("mousemove", (e) => {
    // Get the position of the container relative to the viewport
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize the x and y values to be within the container dimensions
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Set the transform origin to the cursor's position (percentage-based)
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;

    // Apply the zoom effect (scale the image)
    img.style.transform = "scale(2)";
});

// Optional: Reset the image scale when mouse leaves the container
container.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center"; // Reset origin to center
});