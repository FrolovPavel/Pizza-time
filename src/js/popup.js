;(function() {

    let body = document.querySelector("body");


    let showPopup = (target) => {//функция открывает popup (часть листенера)
        target.classList.add('is-active')
        document.body.style.overflow="hidden"
    }

    let closePopup = (target) => { //функция закрывает popup (часть листенера)
        target.classList.remove('is-active')
        document.body.style.overflow="visible"
    }

    body.addEventListener('click', (e) => { // открывает popup
        let target = e.target;
        let popupClass = myLib.closesAttr(target, 'data-popup')

        if(popupClass === null){
            return
        }

        e.preventDefault()

        let popup = document.querySelector('.' + popupClass)

        if(popup) {
            showPopup(popup)
        }
    })

    body.addEventListener('click', (e) => { //закрывает popup на click по крестику и за popup
        let target = e.target

        if(target.classList.contains('popup-close') ||
            target.classList.contains('popup__inner')) {

            let popup = myLib.closesItemByClass(target, 'popup')
            closePopup(popup)
        }

    })

    body.addEventListener('keydown', (e) => { //закрывает popup на esc
        if(e.keyCode !== 27) {
            return
        }

        let popup = document.querySelector('.popup.is-active')

        if(popup) {
            closePopup(popup)
        }
    })

}());
