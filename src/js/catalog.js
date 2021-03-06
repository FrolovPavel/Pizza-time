;(function() {
    let catalogSection = document.querySelector('.section-catalog')

    if(catalogSection === null) {
        return
    }

    let removeChildren = (item) => {
        while (item.firstChild) {
            item.removeChild(item.firstChild)
        }
    }

    let updateChildren = (item, children) => {
        removeChildren(item)
        for(let i = 0; i < children.length; i++) {
            item.appendChild(children[i])
        }
    }

    let catalog = catalogSection.querySelector('.catalog')
    let catalogNav = catalogSection.querySelector('.catalog-nav')
    let catalogItems = catalogSection.querySelectorAll('.catalog__item')

    catalogNav.addEventListener('click', (e) => {
        let target = e.target
        let item = myLib.closesItemByClass(target, 'catalog-nav__btn')

        if(item === null || item.classList.contains('is-active')) {
            return
        }

        e.preventDefault()
        let filterValue = item.getAttribute('data-filter')
        let previousBtnActive = catalogNav.querySelector('.catalog-nav__btn.is-active')

        previousBtnActive.classList.remove('is-active')
        item.classList.add('is-active')

        if(filterValue === 'all') {
            updateChildren(catalog, catalogItems)
            return;
        }

        let filteredItems = []
        for (let  i = 0; i <catalogItems.length; i++){
            let current = catalogItems[i]
            if(current.getAttribute('data-category') === filterValue) {
                filteredItems.push(current)
            }
        }

        updateChildren(catalog, filteredItems)
    })

})();