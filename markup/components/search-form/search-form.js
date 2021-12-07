class SearchForm {
    constructor() {
        // this.$header = document.querySelector('.header');
        // this.$navWrap = document.querySelector('.header__nav-w');

        this.$searchTrigger = document.querySelector('.nav__search');
        this.$searchClose = document.querySelector('.search-form__close');
        this.$search = document.querySelector('.search-form');
        // this.$page = document.querySelector('.page');

        this.events();
        this.searchOpen = false;
    }

    // events
    events() {

        this.$searchTrigger.addEventListener( 'click', (e) => {

            if ( this.searchOpen ) {

                // this.searchOpen = true
                this.closeNav();

            } else {
                // this.searchOpen = false
                this.openNav();
            }

        });

        this.$searchClose.addEventListener( 'click', (e) => {

            if ( this.searchOpen ) {

                // this.searchOpen = true
                this.closeNav();

            } else {
                // this.searchOpen = false
                this.openNav();
            }

        });

    }

    openNav() {
        // this.$header.classList.add('header_nav-open');
        this.$search.classList.add('search-form_open');
        // this.$navWrap.classList.add('header__nav-appearance');
        // this.$navWrap.classList.remove('header__nav-disappear');

        // this.$searchTrigger.classList.add('nav__trigger_active');
        // this.$page.classList.add('page_nav_open');

        this.searchOpen = true;
        console.log('open');
    }

    closeNav() {
        // this.$header.classList.remove('header_nav-open');
        // this.$navWrap.classList.remove('header__nav-appearance');
        // this.$navWrap.classList.add('header__nav-disappear');

        // this.$searchTrigger.classList.remove('nav__trigger_active');
        this.$search.classList.remove('search-form_open');
        // this.$page.classList.remove('page_nav_open');

        this.searchOpen = false;
        console.log('close');
    }


    // methods


}


export default SearchForm;
