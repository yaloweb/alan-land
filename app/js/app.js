document.addEventListener('DOMContentLoaded', () => {

    const langBlock = document.querySelectorAll('.header-lang')

    langBlock.forEach(langBlockItem => {

        const langBtn = langBlockItem.querySelector('.header-lang-current');
        const langDropdown = langBlockItem.querySelector('.header-lang-dropdown');
        const langDropdownItem = langBlockItem.querySelectorAll('.header-lang-item');

        langBtn.addEventListener('click', () => {
            langDropdown.classList.toggle('opened');
        });

        langDropdownItem.forEach(link => {
            link.addEventListener('click', () => {
                langDropdown.classList.remove('opened');
            });
        });
    });

    document.addEventListener('click', e => {
        const tg = e.target;
        if (!tg.closest('.header-lang')) {
            langBlock.forEach(langBlockItem => langBlockItem.querySelector('.header-lang-dropdown').classList.remove('opened'));
        }
        if (!tg.closest('.mob-menu')) {
            closeMenu();
        }
    });

    const scrollToLinks = document.querySelectorAll('.scroll-to');

    scrollToLinks.forEach(scrollToLink => {
        scrollToLink.addEventListener('click', e => {
            e.preventDefault();
            const id = scrollToLink.getAttribute('href');
            const el = document.querySelector(id);

            if (el) {
                console.log(el.getBoundingClientRect().top + window.pageYOffset)
                window.scrollTo({
                    top: el.getBoundingClientRect().top + window.pageYOffset,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    const customizationTextBlocks = document.querySelectorAll('.customization-item');
    const customizationImgs = document.querySelectorAll('.customization-img');

    if (window.innerWidth > 1024 && customizationTextBlocks && customizationTextBlocks.length) {

        customizationTextBlocks.forEach((el, elIndex) => {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    customizationImgs.forEach((imgEl, imgElIndex) => {
                        if (elIndex === imgElIndex) {
                            imgEl.classList.add('active')
                            return;
                        }
                        imgEl.classList.remove('active')
                    });
                });
            });
            observer.observe(el);
        });

    }

    const mobMenu = document.querySelector('.mob-menu');
    const mobMenuOpenBtn = document.querySelector('.mob-menu-open-btn');
    const mobMenuCloseBtn = document.querySelector('.mob-menu-close-btn');

    function openMenu() {
        mobMenu?.classList.add('opened');
    }

    function closeMenu() {
        mobMenu?.classList.remove('opened');
    }

    mobMenuOpenBtn?.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });

    mobMenuCloseBtn?.addEventListener('click', e => {
        e.preventDefault();
        closeMenu();
    });

})
