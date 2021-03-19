;(function() {
    let sectionContacts = document.querySelector('.section-contacts')

    let ymapInit = () => {
        if(typeof ymaps === 'undefined') {
            return
        }

        ymaps.ready(function () {
            var myMap = new ymaps.Map('ymap', {
                    center: [48.701579, 44.516517],
                    zoom: 12
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'г. Волгоград, набережная 62-й Армии, 1'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: "./assets/marker.svg",
                    iconImageSize: [40, 63.2],
                    iconImageOffset: [-25, -50]
                })

            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');

        });
    }

    let ymapLoad = () => {
        let body = document.querySelector("body");
        let script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        body.appendChild(script)
        script.addEventListener('load', ymapInit)
    }

    let checkYmapInit = () => {
        let sectionContactsTop = sectionContacts.getBoundingClientRect().top
        let scrollTop = window.pageYOffset;
        let sectionContactsOffsetTop = sectionContactsTop + scrollTop

        if(scrollTop + window.innerHeight > sectionContactsOffsetTop){
            ymapLoad()
            window.removeEventListener('scroll', checkYmapInit)
        }
    }


    window.addEventListener('scroll', checkYmapInit)
    checkYmapInit()
})();