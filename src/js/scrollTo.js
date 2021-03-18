;(function() {
    let body = document.querySelector('body')


    let scroll = (target) => {
        let targetTop = target.getBoundingClientRect().top
        let scrollTop = window.pageYOffset
        let headerOffset = document.querySelector('.header-page').clientHeight
        let targetOffsetTop = targetTop + scrollTop - headerOffset


        window.scrollTo({
            top: targetOffsetTop,
            behavior: "auto"
        });

    }

    body.addEventListener('click', (e) => {
        let target = e.target
        let scrollToItemClass = myLib.closesAttr(target, 'data-scroll-to')

        e.preventDefault()
        let scrollToItem = document.querySelector('.' + scrollToItemClass)

        if (scrollToItem) {
            scroll(scrollToItem)
        }
    })
})();