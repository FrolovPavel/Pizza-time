;(function() {
    let formBtn = document.querySelector('.form__btn')
    let popupOrder = document.querySelector('.popup-order')
    let popupThk = document.querySelector('.popup-thanks')
    let formInput = document.querySelectorAll('.form__input')

    formBtn.addEventListener('click', () => {
        let i
        for(i = 0; i < formInput.length; i++) {
            if (formInput[i].value === "") {
                formInput[i].style.border = '2px solid #ff000080'
            } else {
                formInput[i].style.border = '2px solid transparent'
            }
        }

        if (formInput[0].value !== "" && formInput[1].value !== "" && formInput[2].value !== "") {
            popupOrder.classList.remove('is-active')
            popupThk.classList.add('is-active')
        }

    })

})();