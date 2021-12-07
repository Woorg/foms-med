class Nav {
    constructor() {
        this.$header = document.querySelector('.header');
        // this.$navWrap = document.querySelector('.header__nav-w');
        this.$navTrigger = document.querySelector('.nav__trigger');
        this.$nav = document.querySelector('.nav_primary');
        this.$page = document.querySelector('.page');

        this.events();
        this.navOpen = false;
    }

    // events
    events() {

        this.$navTrigger.addEventListener( 'click', (e) => {

            if ( this.navOpen ) {

                // this.navOpen = true
                this.closeNav();

            } else {
                // this.navOpen = false
                this.openNav();
            }

        });

    }

    openNav() {
        // this.$header.classList.add('header_nav-open');
        this.$nav.classList.add('nav_open');
        // this.$navWrap.classList.add('header__nav-appearance');
        // this.$navWrap.classList.remove('header__nav-disappear');

        // this.$navTrigger.classList.add('nav__trigger_active');
        this.$page.classList.add('page_nav_open');

        this.navOpen = true;
        console.log('open');
    }

    closeNav() {
        // this.$header.classList.remove('header_nav-open');
        // this.$navWrap.classList.remove('header__nav-appearance');
        // this.$navWrap.classList.add('header__nav-disappear');

        // this.$navTrigger.classList.remove('nav__trigger_active');
        this.$nav.classList.remove('nav_open');
        this.$page.classList.remove('page_nav_open');

        this.navOpen = false;
        console.log('close');
    }


    // methods


}


export default Nav;
