function sectionNavToggle() {

    const $sectionNav = document.querySelector('.section-nav');
    const $items = $sectionNav.querySelectorAll('.section-nav__item');

    for (var i = 0; i < $items.length; i++) {
        $items[i].addEventListener('click', function (e) {
            var highlight = e.target;

            // trying to achieve this
            this.classList.add('section-nav__item_active');
            addClassSiblings.bind(this, 'section-nav__item_active')();
        });
    }

    function addClassSiblings(classNames) {
        var cs = this.nextElementSibling;
        while (cs) {
            cs.classList.remove(classNames);
            cs = cs.nextElementSibling;
        }

        cs = this.previousElementSibling;
        while (cs) {
            cs.classList.remove(classNames);
            cs = cs.previousElementSibling;
        }
    }

}

export default sectionNavToggle;
