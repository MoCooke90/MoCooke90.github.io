document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
        const selectedColor = e.target.dataset.color;

      
        const productImage = document.getElementById('product-img');
        productImage.src = `product-${selectedColor}.jpg`; 

      
        document.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
        e.target.classList.add('selected');
    });
});