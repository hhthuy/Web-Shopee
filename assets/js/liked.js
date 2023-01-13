
//Like heart product
const likeHeart = document.querySelector(".home-product-item__btn-like");
likeHeart.addEventListener("click", function(event){
    event.currentTarget.classList.toggle("home-product-item__btn-liked")
    // toggle: add/remove: bam 1 lan them fill vao, bam lan 2, xoa fill
})

