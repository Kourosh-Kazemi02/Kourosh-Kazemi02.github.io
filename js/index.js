const body = document.querySelector('body');
var navbar = document.querySelector('.navigition-1');
const ul_navbar = document.querySelector('.ul-navigaition');
const a_navbar = document.querySelectorAll('.a-navigaition');
const btn_about = document.querySelector('.about');
const about_menu = document.querySelector('.aboutMenu');
const a_aboutMenu = document.querySelectorAll('.a-aboutMenu');
const btn_menuNum = document.querySelector('.btn-menu-num');
const menu_num = document.querySelector('.menuNum');
const parent_about_menu_mobile = document.querySelector('.parent-about-menu-mobile');
const btn_about_mobile = document.querySelector('.btn-navigation-mobile');
const about_menu_mobile = document.querySelector('.about-menu-mobile');
const close_about_menu_mobile = document.querySelector('.close-about-mobile');
const icon_nav_mobile = document.querySelectorAll('.icon-nav-mobile');
const ss = document.querySelectorAll('.aboutMenu-mobile');
const sectionHead = document.querySelector('.heading-section');
const spanTyping = document.querySelector('.span-typing')
const image_slider_1 = document.querySelector('.img-slider1');
const buttons = document.querySelectorAll('button');
const sliders_2 = document.querySelector('.container-slider-2');
const sliders_3 = document.querySelector('.container-slider-3');
const div_child_slider_2 = document.querySelectorAll('.slider-div-child');
const img_gallery = document.querySelectorAll('.img-gallery');
const parent_gallery_slider = document.querySelector('.parent-gallery-slider');
const img_gallery_slider = document.querySelector('.img-slider-gallery');
const close_slider_gallery = document.querySelector('.btn-close-slider');
const play_slider_gallery = document.querySelector('.btn-play-slider');
const icon_play = document.querySelector('.icon-play');
const parentBlockquote = document.querySelector('.parent-blockquote');
const headCostomers = document.querySelector('.heading-customers');
const headBlog = document.querySelector('.head-blog');
const blogItems = document.querySelectorAll('.blog-items');
const text_area = document.querySelectorAll('textarea');
const inputs = document.querySelectorAll('input');
var sectionList = ["Motivational Speakers", "Professional Speakers", "Business Speakers", "Professional Life Coach"]
let img_slider1 = ['images/slider1-1.webp', 'images/slider1-2.webp', 'images/slider1-3.webp'];
var src_gallery_slider = ['images/slider2-1.webp', 'images/slider2-3.webp'];
let active_index = 0;
var active_index_gallery = 0;
var i = 0;
var j = 0;

window.addEventListener("scroll", function () {
    if (3700 <= window.scrollY) {
        img_gallery[0].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[0].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[1].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[1].classList.add('js-animate');
        }, 1500)
        // ----
        img_gallery[2].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[2].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[3].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[3].classList.add('js-animate');
        }, 1500)
    }
    if (4100 <= window.scrollY) {
        img_gallery[4].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[4].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[5].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[5].classList.add('js-animate');
        }, 1500)
        // ----
        img_gallery[6].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[6].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[7].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[7].classList.add('js-animate');
        }, 1500)
    }
    if (4250 <= window.scrollY) {
        img_gallery[8].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[8].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[9].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[9].classList.add('js-animate');
        }, 1500)
        // ----
        img_gallery[10].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[10].classList.add('js-animate');
        }, 1500)
        // -----
        img_gallery[11].animate({
            opacity: 1,
            marginTop: '0px',
        }, {
            duration: 1500,
            easing: 'ease',
        });
        setTimeout(function () {
            img_gallery[11].classList.add('js-animate');
        }, 1500)
    }
    if (4660 <= window.scrollY) {
        parentBlockquote.animate({
            marginTop: '40px',
            opacity: 1,
        }, {
            duration: 2500,
            easing: 'ease',
        });
        setTimeout(function () {
            parentBlockquote.classList.add('js-animate');
        }, 2500)
    }
    if (5240 <= window.scrollY) {
        headBlog.animate({
            opacity: 1,
            marginTop: '0px'
        }, {
            duration: 1500,
            easing: "ease",
        })
        setTimeout(function () {
            headBlog.classList.add('js-animate');
        }, 1500);
    }
    if (5250 <= window.scrollY) {
        blogItems[0].animate({
            opacity: 1,
            marginTop: '0px'
        }, {
            duration: 1000,
            easing: "ease",
        })
        setTimeout(function () {
            blogItems[0].classList.add('js-animate');
        }, 1000);

        blogItems[1].animate({
            opacity: 1,
            marginTop: '0px'
        }, {
            duration: 1200,
            easing: "ease",
        })
        setTimeout(function () {
            blogItems[1].classList.add('js-animate');
        }, 1200);
    }
    if (5450 <= window.scrollY) {
        blogItems[2].animate({
            opacity: 1,
            marginTop: '0px'
        }, {
            duration: 1000,
            easing: "ease",
        })
        setTimeout(function () {
            blogItems[2].classList.add('js-animate');
        }, 1000);

        blogItems[3].animate({
            opacity: 1,
            marginTop: '0px'
        }, {
            duration: 1200,
            easing: "ease",
        })
        setTimeout(function () {
            blogItems[3].classList.add('js-animate');
        }, 1200);
    }
})

window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        a_navbar[0].classList.add('text-black');
    }
    else if (0 < window.scrollY && window.scrollY < 770) {
        a_navbar[0].classList.remove('text-black');
        a_navbar[1].classList.add('text-black');
        a_aboutMenu[0].classList.add('text-black');
    }
    else if (window.scrollY > 770 && window.scrollY < 1900) {
        a_navbar[0].classList.add('text-black');
        a_navbar[1].classList.remove('text-black');
        a_aboutMenu[0].classList.add('text-black');
        a_navbar[2].classList.add('text-black');
    }
    else if (window.scrollY > 1900 && window.scrollY < 2710) {
        a_navbar[1].classList.add('text-black');
        a_aboutMenu[0].classList.remove('text-black');
        a_navbar[2].classList.remove('text-black');
        a_navbar[3].classList.add('text-black');
    }
    else if (window.scrollY > 2710 && window.scrollY < 3420) {
        a_aboutMenu[0].classList.add('text-black');
        a_navbar[2].classList.add('text-black');
        a_navbar[3].classList.remove('text-black');
        a_aboutMenu[2].classList.add('text-black');
    }
    else if (window.scrollY > 3420 && window.scrollY < 4500) {
        a_navbar[3].classList.add('text-black');
        a_aboutMenu[2].classList.remove('text-black');
        a_aboutMenu[1].classList.add('text-black')
    }
    else if (4500 <= window.scrollY && window.scrollY < 5250) {
        a_aboutMenu[2].classList.add('text-black');
        a_aboutMenu[1].classList.remove('text-black')
        a_aboutMenu[3].classList.add('text-black')
    }
    else if (5250 <= window.scrollY && window.scrollY < 6150) {
        a_aboutMenu[1].classList.add('text-black')
        a_aboutMenu[3].classList.remove('text-black')
    }
    else { }
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add("bg-white");
        navbar.style.height = "67px";
        ul_navbar.style.height = "67px";

        a_navbar[0].style.lineHeight = "67px";
        a_navbar[1].style.lineHeight = "67px";
        a_navbar[2].style.lineHeight = "67px";
        a_navbar[3].style.lineHeight = "67px";
        a_navbar[4].style.lineHeight = "67px";
        about_menu.animate({
            marginTop: '67px'
        }, {
            duration: 300,
            easing: "ease"
        })
        setTimeout(function () {
            about_menu.style.marginTop = '67px'
        }, 300)
        menu_num.animate({
            marginTop: '194px'
        }, {
            duration: 300,
            easing: "ease"
        })
        setTimeout(function () {
            menu_num.style.marginTop = '194px'
        }, 300)
    } else if (window.scrollY == 0) {
        navbar.classList.remove("bg-white");
        navbar.style.height = "88px";
        ul_navbar.style.height = "88px";

        a_navbar[0].style.lineHeight = "88px";
        a_navbar[1].style.lineHeight = "88px";
        a_navbar[2].style.lineHeight = "88px";
        a_navbar[3].style.lineHeight = "88px";
        a_navbar[4].style.lineHeight = "88px";

        about_menu.animate({
            marginTop: '85px'
        }, {
            duration: 300,
            easing: "ease"
        })
        setTimeout(function () {
            about_menu.style.marginTop = '85px'
        }, 300)
        menu_num.animate({
            marginTop: '215px'
        }, {
            duration: 300,
            easing: "ease"
        })
        setTimeout(function () {
            menu_num.style.marginTop = '215px'
        }, 300)
    } else { }
});

btn_about.addEventListener('mouseover', function () {
    let m;
    if (window.scrollY > 0) {
        m = 67;
    }
    else {
        m = 85;
    }
    about_menu.classList.remove('d-none');
    about_menu.animate({
        marginTop: `${m}px`,
        opacity: 1,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        about_menu.classList.remove('d-none');
        about_menu.style.marginTop = `${m}px`;
        about_menu.style.opacity = "1";
    }, 250);
});

about_menu.addEventListener('mouseover', function () {
    let m;
    if (window.scrollY > 0) {
        m = 67;
    }
    else {
        m = 85;
    }
    about_menu.classList.remove('d-none');
    about_menu.animate({
        marginTop: `${m}px`,
        opacity: 1,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        about_menu.classList.remove('d-none');
        about_menu.style.marginTop = `${m}px`;
        about_menu.style.opacity = "1";

    }, 250);
});

btn_about.addEventListener('mouseleave', function (e) {
    about_menu.animate({
        marginTop: '150px',
        opacity: 0,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        about_menu.classList.add('d-none');
        about_menu.style.marginTop = "150px";
        about_menu.style.opacity = "0";

    }, 250);
});

about_menu.addEventListener('mouseleave', function (e) {
    if (e.target != btn_about) {
        about_menu.animate({
            marginTop: '150px',
            opacity: 0,

        }, {
            duration: 250,
            easing: 'ease',
        });
        setTimeout(function () {
            about_menu.classList.add('d-none');
            about_menu.style.marginTop = "150px";
            about_menu.style.opacity = "0";

        }, 250);
    }
});

menu_num.addEventListener('mouseover', function () {
    let m;
    if (window.scrollY > 0) {
        m = 67;
    }
    else {
        m = 85;
    }
    about_menu.classList.remove('d-none');
    about_menu.animate({
        marginTop: `${m}px`,
        opacity: 1,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        about_menu.classList.remove('d-none');
        about_menu.style.marginTop = `${m}px`;
        about_menu.style.opacity = "1";
    }, 250);
});
menu_num.addEventListener('mouseleave', function () {
    about_menu.animate({
        marginTop: '150px',
        opacity: 0,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        about_menu.classList.add('d-none');
        about_menu.style.marginTop = "150px";
        about_menu.style.opacity = "0";

    }, 250);
});

btn_menuNum.addEventListener('mouseover', function () {
    let m;
    if (window.scrollY > 0) {
        m = 197;
    }
    else {
        m = 215;
    }
    menu_num.classList.remove('d-none');
    menu_num.animate({
        marginTop: `${m}px`,
        opacity: 1,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        menu_num.classList.remove('d-none');
        menu_num.style.marginTop = `${m}px`;
        menu_num.style.opacity = "1";
    }, 250);
});

menu_num.addEventListener('mouseover', function () {
    let m;
    if (window.scrollY > 0) {
        m = 197;
    }
    else {
        m = 215;
    }
    menu_num.classList.remove('d-none');
    menu_num.animate({
        marginTop: `${m}px`,
        opacity: 1,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        menu_num.classList.remove('d-none');
        menu_num.style.marginTop = `${m}px`;
        menu_num.style.opacity = "1";

    }, 250);
});

btn_menuNum.addEventListener('mouseleave', function (e) {
    menu_num.animate({
        marginTop: '365px',
        opacity: 0,

    }, {
        duration: 250,
        easing: 'ease',
    });
    setTimeout(function () {
        menu_num.classList.add('d-none');
        menu_num.style.marginTop = "150px";
        menu_num.style.opacity = "0";

    }, 250);
});

menu_num.addEventListener('mouseleave', function (e) {
    if (e.target != btn_about) {
        menu_num.animate({
            marginTop: '365px',
            opacity: 0,

        }, {
            duration: 250,
            easing: 'ease',
        });
        setTimeout(function () {
            menu_num.classList.add('d-none');
            menu_num.style.marginTop = "150px";
            menu_num.style.opacity = "0";

        }, 250);
    }
});

btn_about_mobile.addEventListener("click", function () {
    parent_about_menu_mobile.classList.toggle('d-none');
    let i = -300;
    let key4 = setInterval(function () {
        about_menu_mobile.style.marginRight = `${i}px`;
        console.log(i);
        if (i == 0) {
            clearInterval(key4);
        }
        i += 30;
    }, 10)
})

close_about_menu_mobile.addEventListener("click", function () {
    let j = 0;
    let key5 = setInterval(function () {
        about_menu_mobile.style.marginRight = `${j}px`;
        console.log(j);
        if (j == -300) {
            clearInterval(key5);
            parent_about_menu_mobile.classList.toggle('d-none');
        }
        j -= 30;
    }, 10)
})

function clearHeadingSection() {
    for (let i = 0; i < 5; i++) {

        spanTyping.animate({
            opacity: 1
        }, {
            duration: 250,
            easing: "ease"
        })
        spanTyping.animate({
            opacity: 0
        }, {
            duration: 250,
            easing: "ease"
        })
    }
    setTimeout(function () {
        let key6 = setInterval(function () {
            sectionHead.innerHTML = sectionHead.innerHTML.slice(0, -1)
            if (sectionHead.innerHTML.length == 0) {
                clearInterval(key6)
                wtiteHeadingSection()
            }
        }, 100)
    }, 2000)
}

function wtiteHeadingSection() {
    let key5 = setInterval(function () {
        sectionHead.innerHTML += sectionList[i][j];
        j++

        if (i == 0 && sectionList[i].length == j) {
            i++
            j = 0;
            clearInterval(key5)
            clearHeadingSection()
        }
        else if (i == 1 && sectionList[i].length == j) {
            i++
            j = 0;
            clearInterval(key5)
            clearHeadingSection()
        }
        else if (i == 2 && sectionList[i].length == j) {
            i++
            j = 0;
            clearInterval(key5)
            clearHeadingSection()
        } else if (i == 3 && sectionList[i].length == j) {
            i = 0;
            j = 0;
            clearInterval(key5)
            clearHeadingSection()
        } else { }
    }, 100)
}
wtiteHeadingSection()

buttons[0].addEventListener("click", function () {
    active_index--;
    if (active_index == -1) {
        active_index = 2;
    }
    let opacity = 1;
    let key1 = setInterval(function () {
        opacity -= 0.05;
        image_slider_1.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(key1);
            image_slider_1.src = img_slider1[active_index];
            opacity = 0;
            let key2 = setInterval(function () {
                opacity += 0.05;
                image_slider_1.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(key2);
                }
            }, 5);
        }
    }, 5);
});

buttons[1].addEventListener("click", function () {
    active_index++;
    if (active_index == 3) {
        active_index = 0;
    }
    let opacity = 1;
    let key1 = setInterval(function () {
        opacity -= 0.05;
        image_slider_1.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(key1);
            image_slider_1.src = img_slider1[active_index];
            opacity = 0;
            let key2 = setInterval(function () {
                opacity += 0.05;
                image_slider_1.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(key2);
                }
            }, 5);
        }
    }, 5);
});

var owl1 = $(".container-slider-2").owlCarousel({
    autoplay: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

buttons[2].addEventListener("click", (function () {
    owl1.trigger('prev.owl.carousel', [1000]);
})
)

buttons[3].addEventListener("click", (function () {
    owl1.trigger('next.owl.carousel', [1000]);
})
)

var owl2 = $(".container-slider-3").owlCarousel({
    autoplay: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});

buttons[4].addEventListener("click", (function () {
    owl2.trigger('prev.owl.carousel', [1000]);
})
)

buttons[5].addEventListener("click", (function () {
    owl2.trigger('next.owl.carousel', [1000]);
})
)

var owl3 = $(".container-customers-slider").owlCarousel({
    autoplay: true,
    loop: true,
    items: 1
});

document.querySelectorAll('.parent-chevron-down-mobile')[0].addEventListener("click", function () {
    if (icon_nav_mobile[0].classList[1] == 'bi-chevron-down' || icon_nav_mobile[0].classList[2] == 'bi-chevron-down') {
        ss[0].classList.toggle("d-none");
        ss[0].classList.toggle("d-flex");
        icon_nav_mobile[0].classList.toggle("bi-chevron-down");
        icon_nav_mobile[0].classList.toggle("bi-chevron-up");
        let h = 0;
        let key8 = setInterval(function () {
            ss[0].style.height = `${h}px`;
            h += 10;
            if (h == 400) {
                clearInterval(key8)
            }
        }, 1)
    }
    else if (icon_nav_mobile[0].classList[2] == 'bi-chevron-up') {
        ss[0].classList.toggle("d-flex");
        icon_nav_mobile[0].classList.toggle("bi-chevron-up");
        icon_nav_mobile[0].classList.toggle("bi-chevron-down");
        let h = 400;
        let key9 = setInterval(function () {
            ss[0].style.height = `${h}px`;
            h -= 10;
            if (h == 0) {
                clearInterval(key9)
                ss[0].classList.toggle("d-none");
            }
        }, 1)
    }
})



document.querySelectorAll('.parent-chevron-down-mobile')[1].addEventListener("click", function () {
    if (icon_nav_mobile[1].classList[1] == 'bi-chevron-down' || icon_nav_mobile[1].classList[2] == 'bi-chevron-down') {
        ss[1].classList.toggle("d-none");
        icon_nav_mobile[1].classList.toggle("bi-chevron-down");
        icon_nav_mobile[1].classList.toggle("bi-chevron-up");

        let h = 0;
        let key10 = setInterval(function () {
            ss[1].style.height = `${h}px`;
            ss[0].style.height = `${280 + h}px`;

            h += 10;
            if (h == 250) {
                clearInterval(key10)
            }
        }, 1)
    }
    else if (icon_nav_mobile[1].classList[2] == 'bi-chevron-up') {
        icon_nav_mobile[1].classList.toggle("bi-chevron-up");
        icon_nav_mobile[1].classList.toggle("bi-chevron-down");

        let h = 250;
        let key11 = setInterval(function () {
            ss[1].style.height = `${h}px`;
            ss[0].style.height = `${280 + h}px`;

            h -= 10;
            if (h == 0) {
                clearInterval(key11)
                ss[1].classList.toggle("d-none");
            }
        }, 1)
    }
})

document.addEventListener("click", function (e) {
    if (e.target == img_gallery[0] || e.target == img_gallery[2] || e.target == img_gallery[4] || e.target == img_gallery[6] || e.target == img_gallery[8] || e.target == img_gallery[10]) {
        parent_gallery_slider.classList.toggle('d-none');
        body.style.overflow = 'hidden';
        img_gallery_slider.src = src_gallery_slider[0];
        active_index_gallery = 0;
    }
    else if (e.target == img_gallery[1] || e.target == img_gallery[3] || e.target == img_gallery[5] || e.target == img_gallery[7] || e.target == img_gallery[9] || e.target == img_gallery[11]) {
        parent_gallery_slider.classList.toggle('d-none');
        body.style.overflow = 'hidden';
        img_gallery_slider.src = src_gallery_slider[1];
        active_index_gallery = 1;

    }
})
buttons[6].addEventListener("click", function () {
    active_index_gallery--;
    if (active_index_gallery == -1) {
        active_index_gallery = 1;
    }
    img_gallery_slider.src = src_gallery_slider[active_index_gallery];
})
buttons[7].addEventListener("click", function () {
    active_index_gallery++;
    if (active_index_gallery == 2) {
        active_index_gallery = 0;
    }
    img_gallery_slider.src = src_gallery_slider[active_index_gallery];
})
console.log(buttons)
window.addEventListener("click", function (e) {
    if (e.target == parent_gallery_slider) {
        parent_gallery_slider.classList.toggle('d-none');
        body.style.overflow = 'visible';
    }
})

play_slider_gallery.addEventListener("click", function () {
    icon_play.classList.toggle('bi-play-fill');
    icon_play.classList.toggle('bi-pause');
    let key3 = setInterval(function () {

        active_index_gallery++;
        if (active_index_gallery == 2) {
            active_index_gallery = 0;
        }
        img_gallery_slider.src = src_gallery_slider[active_index_gallery];
        if (icon_play.classList[3] == "bi-play-fill") {
            clearInterval(key3)
        }

    }, 3000)
});
buttons[8].addEventListener("click", function () {
    img_gallery_slider.classList.toggle('zoom-in')
})

close_slider_gallery.addEventListener("click", function () {
    parent_gallery_slider.classList.toggle('d-none')
    body.style.overflow = 'visible'
})
