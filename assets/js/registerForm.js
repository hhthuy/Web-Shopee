const buyBtns = document.querySelectorAll('.js-register-form');  // vì có nhiều element nên sử dụng ...All()
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-register') //Lay 
const modalClose = document.querySelector('.modal-close  ')
        // hàm hiển thị modal dang ky ( thêm class open vào modal)
        function showFormResgiter() {
            modal.classList.add('open')
        }

        // hàm ẩn modal dang ky (gỡ bỏ class open của thg modal)  
        function hideFormResgiter() {
            modal.classList.remove('open')
        }
        // lặp qua từng thẻ button và nghe thẻ click  ,  
        for (const buyBtn of buyBtns) {// Vì có nhiều element cần kiểm tra event, nên dùng biến con buyBtn để duyệt các element class "buyBtns"
            // Duyệt qua mỗi element, lắng nghe event của người dùng và gọi đến hàm cần thực hiện.
            buyBtn.addEventListener('click', showFormResgiter)
        }
        // nghe hành vi click vào button close
        modalClose.addEventListener('click', hideFormResgiter)
        // Tương tự như trên, vì có 1 element nên không cần for.
        modal.addEventListener('click', hideFormResgiter)

        //Khi bấm vào khoảng trống ngoài modal -> đóng modal
        // Vì tính chất nổi bọt giữa element con và cha. Nên ta cần chặn event nổi bọt tới element class "-modal-container"
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })