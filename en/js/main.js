
/*HEADER ANIMATION DUE SCROLL*/
const header = document.querySelector("[data-header]");

function scrollHeaderFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}


/*BURGER MENU*/

(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const headerWraperRef = document.querySelector('[data-header]');


    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
        menuBtnRef.classList.toggle('is-open');
        headerWraperRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
        document.body.classList.toggle('unscroll');
    });
})();

$('.gamburger').click(function () {
    $('.gamburger span:nth-child(1)').toggleClass('first');
    $('.gamburger span:nth-child(2)').toggleClass('last');

});


$('[data-controls-link]').click(function () {
    $('[data-menu-button]').toggleClass('is-open');
    $('[data-menu]').toggleClass('is-open');
    $('[data-header]').toggleClass('is-open');
    document.body.classList.toggle('unscroll');
    $('.gamburger span:nth-child(1)').toggleClass('first');
    $('.gamburger span:nth-child(2)').toggleClass('last');
});
/*****SCROLL  SECTION  WITH CHANGE VISIBILITY*****/
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 70;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};


window.addEventListener("scroll", () => {
    scrollHeaderFunction();
    reveal();
});

document.getElementById("title1").animate(
    [
        // keyframes
        {
            transform: "translateY(-120px)",
            opacity: 0
        },
        {
            transform: "translateY(0px)",
            opacity: 1
        },
    ],
    {
        // timing options
        duration: 1000,
        iterations: 1,
    },
);
document.getElementById("title2").animate(
    [
        // keyframes
        {
            transform: "translateY(100%)",
            opacity: 0
        },
        {
            transform: "translateY(0)",
            opacity: 1
        },
    ],
    {
        // timing options
        duration: 1000,
        iterations: 1,
    },
);

window.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="tel"]');

    Array.prototype.forEach.call(inputs, function (input) {
        new InputMask({
            selector: input, 
            layout: input.dataset.mask
        })
    })

});
function InputMask(options) {
    this.el = this.getElement(options.selector);
    if (!this.el) return console.log('Щось не так з селектором');
    this.layout = options.layout || '+_ (___) ___-__-__';
    this.maskreg = this.getRegexp();

    this.setListeners();
}

InputMask.prototype.getRegexp = function () {
    var str = this.layout.replace(/_/g, '\\d')
    str = str.replace(/\(/g, '\\(')
    str = str.replace(/\)/g, '\\)')
    str = str.replace(/\+/g, '\\+')
    str = str.replace(/\s/g, '\\s')

    return str;
}

InputMask.prototype.mask = function (e) {
    var _this = e.target,
        matrix = this.layout,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = _this.value.replace(/\D/g, "");

    if (def.length >= val.length) val = def;

    _this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (e.type == "blur") {
        var regexp = new RegExp(this.maskreg);
        if (!regexp.test(_this.value)) _this.value = "";
    } else {
        this.setCursorPosition(_this.value.length, _this);
    }
}

InputMask.prototype.setCursorPosition = function (pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

InputMask.prototype.setListeners = function () {
    this.el.addEventListener("input", this.mask.bind(this), false);
    this.el.addEventListener("focus", this.mask.bind(this), false);
    this.el.addEventListener("blur", this.mask.bind(this), false);
}

InputMask.prototype.getElement = function (selector) {
    if (selector === undefined) return false;
    if (this.isElement(selector)) return selector;
    if (typeof selector == 'string') {
        var el = document.querySelector(selector);
        if (this.isElement(el)) return el;
    }
    return false
}

InputMask.prototype.isElement = function (element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

// Smooth scroll to anchor

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/******Modal*****/
(() => {
    const openModalBtn = document.querySelectorAll('[data-modal-open]');
    const closeModalBtn = document.querySelector('[data-modal-close]');
    const modal = document.querySelector('[data-modal]');

    openModalBtn.forEach(function (openModalBtn) {
        openModalBtn.addEventListener('click', toggleModal);
    });
    closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle('modal-open');
        modal.classList.toggle('is-hidden');
    }
})();

