;(function() {
    window.myLib = {}
    window.myLib.closesAttr = function(item, attr) {
        let node = item

        while(node) {
            let attrValue = node.getAttribute(attr)
            if(attrValue) {
                return attrValue
            }

            node = node.parentElement
        }

        return null;
    }

    window.myLib.closesItemByClass = function(item, className) { //проверяет есть ли у нажатого элемента указанный атрибут Бесли да возвращает его если нет смотрит атрибут у родителя
        let node = item

        while(node) {
            if(node.classList.contains(className)) {
                return node
            }

            node = node.parentElement
        }

        return null;
    }
})();

//отдельно вынесенные функции для избижания дублирования кода