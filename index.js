const button_burger = document.getElementById("hamburger");
const burger_lines = document.querySelectorAll(".hamburger-menu-line")

button_burger.addEventListener("click", () => {

    const isExpanded = button_burger.getAttribute('aria-expanded') === 'true';

    button_burger.setAttribute('aria-expanded', !isExpanded);

    const burgerClassAdd = isExpanded ? 'inActive' : 'Active';
    const burgerClassRemove = isExpanded ? 'Active' : 'inActive';

    burger_lines.forEach(line => {
        line.classList.remove(burgerClassRemove);
        line.classList.add(burgerClassAdd);
    })
});

const about_me_main_text = document.querySelector(".about-me-main-text");
const about_me_subcontainer = document.querySelector(".about-me-subcontainer");
const navigation = document.querySelector(".navbar");
const about_me_descr = document.querySelector(".about-me-description");
const about_me_hi = document.querySelector(".about-me-description-hi");
const about_me_name = document.querySelector(".about-me-description-name");
const about_me_p = document.querySelector(".about-me-description-text-p");
const about_me_photo = document.querySelector(".about-me-photo");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

window.addEventListener("load", () => {

    navigation.classList.add("on-start");

    const delay_about_me = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function aboutMeClassAdd() {

        await delay_about_me(200);
        about_me_main_text.classList.add("on-start");
        about_me_subcontainer.classList.add("on-start");
        about_me_descr.classList.add("on-start");

        await delay_about_me(600)
        about_me_hi.classList.add("on-start");
        about_me_name.classList.add("on-start");
        about_me_p.classList.add("on-start");
        about_me_photo.classList.add("on-start");

        const abilities_trigger = document.querySelector(".about-me-abilities")

        const abilities_observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetElement = document.querySelectorAll(".list-ab");
                    targetElement.forEach(element => {
                        element.classList.add("is-active");
                    })
                    abilities_observer.unobserve(entry.target)
                }
            })
        }, options)

        abilities_observer.observe(abilities_trigger)
    }

    aboutMeClassAdd().catch(err => {
        console.log(err);
    })
})

const standarts_block_trigger = document.querySelector(".standarts-container");

const standarts_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const targetStdTitle = document.querySelector(".my-std-title");
            const targetStdDescr = document.querySelectorAll(".std-descr");

            if (targetStdTitle) {
                targetStdTitle.classList.add("is-active");
            }

            targetStdDescr.forEach(el2 => {
                el2.classList.add("is-active");
            })

            standarts_observer.unobserve(entry.target)
        }
    })
}, options)

standarts_observer.observe(standarts_block_trigger)

const targetTechTitle = document.querySelector(".my-tech-stack-window");

function openWindow() {
    const init_text = document.getElementById('my_tech_stack_loading_text')
    const init_success = document.querySelector('.tech-success')
    const window_result = document.querySelector('.my-tech-stack-result')

    const res_lang = document.getElementById('my_tech_stack_result_lang')
    const res_lang_cont = document.querySelector('.my-tech-stack-result-lang-img')
    const res_lang_html = document.querySelector('.html')
    const res_lang_css = document.querySelector('.css')
    const res_lang_js = document.querySelector('.js')

    const res_lay = document.getElementById('my_tech_stack_result_layout')
    const res_lay_it1 = document.querySelector('.my-tech-stack-result-layout-grid-item-1')
    const res_lay_it2 = document.querySelector('.my-tech-stack-result-layout-grid-item-2')
    const res_lay_it3 = document.querySelector('.my-tech-stack-result-layout-grid-item-3')
    const res_lay_it4 = document.querySelector('.my-tech-stack-result-layout-grid-item-4')
    const res_lay_it5 = document.querySelector('.my-tech-stack-result-layout-grid-item-5')
    const res_lay_it6 = document.querySelector('.my-tech-stack-result-layout-grid-item-6')

    const res_cms = document.getElementById('my_tech_stack_result_cms')
    const res_cms_icon = document.querySelector('.wordpress')

    const res_inst = document.getElementById('my_tech_stack_result_instruments')
    const res_inst_cont = document.querySelector('.my-tech-stack-result-instruments-img')
    const res_figma = document.querySelector('.figma')
    const res_vscode = document.querySelector('.vscode')
    const res_git = document.querySelector('.git')



    function setAttrTech () {
        init_text.classList.add('tech-hidden')

        async function setTechIsActive () {

            await delay(2000)
            init_success.classList.add('is-active');
            console.log('Tech is active')
        }

        setTechIsActive().catch((err) => {
            console.error(err)
        })

        window_code_load().catch((err) => {
            console.error(err)
        })
        console.log('Выдан класс спрятан: ' + init_text.getAttribute('tech-hidden'));
        console.log('Выдан класс актив: ' + init_success.getAttribute('is-active'));
    }

    async function window_code_load() {

        await delay(2000)
        window_result.classList.add('is-active');

        await delay(1600)
        res_lang.classList.add('is-active');

        await delay(600)
        res_lang_cont.classList.add('is-active');
        res_lang_html.classList.add('is-active');
        res_lang_css.classList.add('is-active');
        res_lang_js.classList.add('is-active');

        await delay(1600)
        res_lay.classList.add('is-active');

        await delay(600)
        res_lay_it1.classList.add('is-active');
        res_lay_it2.classList.add('is-active');
        res_lay_it3.classList.add('is-active');
        res_lay_it4.classList.add('is-active');
        res_lay_it5.classList.add('is-active');
        res_lay_it6.classList.add('is-active');

        await delay(1600)
        res_cms.classList.add('is-active');

        await delay(600)
        res_cms_icon.classList.add('is-active');

        await delay(1600)
        res_inst.classList.add('is-active');

        await delay(600)
        res_inst_cont.classList.add('is-active');
        res_figma.classList.add('is-active');
        res_vscode.classList.add('is-active');
        res_git.classList.add('is-active');

    }



    const init_text_full = 'Init Started';
    const load_text_full = 'Loading file "my_tech_stack.html"';

    const typing = '|'

    async function tech_text_load_base() {

        function typeInit () {
            return new Promise(resolve => {
                let i = 0

                function printLetterInit () {
                    if (i > init_text_full.length) {
                        resolve()
                        return
                    }
                    init_text.innerText = init_text_full.slice(0,i) + typing
                    i++
                    setTimeout(printLetterInit, 200)
                }
                printLetterInit()
            })
        }

        function clearInit () {
            return new Promise(resolve => {
                let i = init_text_full.length

                function clearLetterInit () {
                    if (i === 0) {
                        resolve()
                        return
                    }
                    init_text.innerText = init_text_full.slice(0,i) + typing
                    i--
                    setTimeout(clearLetterInit, 110)
                }
                clearLetterInit()
            })
        }

        function typeLoad () {
            return new Promise(resolve => {
                let i = 0

                function printLetterLoad () {
                    if (i > load_text_full.length) {
                        resolve()
                        return
                    }
                    init_text.innerText = load_text_full.slice(0,i) + typing
                    i++
                    setTimeout(printLetterLoad, 200)
                }
                printLetterLoad()
            })
        }

        function typeDots() {
            return new Promise(resolve => {
                let count = 0;

                const baseText = load_text_full

                function printDot() {
                    if (count >= 3) {
                        resolve();
                        init_text.innerText = baseText
                        return;
                    }
                    count++;

                    init_text.innerText = baseText + ' .'.repeat(count);

                    setTimeout(printDot, 800);
                }
                printDot();
            });
        }

        async function tech_text_load() {

            try {
                await delay(200);
                await typeInit()

                await delay(500);
                await clearInit()

                await delay(200);
                await typeLoad()

                await delay(400);
                await typeDots()

                await delay(400);
                await typeDots()

                await delay(400);
                await typeDots()

                await delay(130);
                setAttrTech()

                // await new Promise(requestAnimationFrame);
                //
                // await delay(130);
                // await window_code_load()

            } catch (err) {
                console.log(err)
            }

        }

        tech_text_load().catch(console.error);

    }

    tech_text_load_base().catch(err => {
        console.log(err)
    })
}

const window_observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            openWindow()
        }
    })
},options)

if (targetTechTitle) {
    window_observer.observe(targetTechTitle);
}

const slides = document.querySelector('.cases-slider-line');

const task = document.getElementById('task_text');
const requirements = document.getElementById('requirements_text');

const slideCount = document.querySelectorAll('.cases-slider-item').length;

const prevButton = document.querySelector('.slider-btn-prev');
const nextButton = document.querySelector('.slider-btn-next');

let currentIndex = 0;

const tasks_texts = [
    'Разработать промо-страницу для локального котокафе с целью привлечь новых посетителей в офлайн-точку за счет раздачи бесплатных купонов на скидку 15% за подписку',
    'Создать страницу предзаписи на онлайн-интенсив по искусственному интеллекту для сбора базы «теплых» лидов до официального старта продаж',
    'Разработать агрессивный продающий лендинг для частного мастера по ремонту стиральных машин с целью получения прямых звонков и заявок на выезд от жителей конкретного района',
    'Создать посадочную страницу под один товар (умная термокружка) для быстрой импульсивной продажи через интернет-рекламу',
    'Спроектировать страницу регистрации на бесплатный вебинар фитнес-тренера для привлечения целевой аудитории на последующие платные программы'
]

const requirements_texts = [
    'Необходимо спроектировать уютный четырехэкранный сайт в бежевых тонах с формой сбора имени и почты для скачивания PDF-купона, а также разместить блоки с фишками заведения, мини-меню и картой проезда.',
    'Требуется создать трехэкранный футуристичный интерфейс в темной теме с неоновыми акцентами, где ключевыми элементами станут кнопка перехода к анкете предзаписи, таймер обратного отсчета, скрытая в аккордеоны программа курса и короткая форма сбора Telegram-ников',
    'Нужно сверстать чистый трехцветный сайт в сине-белой гамме с оранжевыми кнопками, где в шапке будет закреплен крупный кликабельный телефон, а на самой странице разместятся плитка поломок с ценами, триггеры гарантии и блок с отзывами для максимального доверия',
    'Спроектируйте минималистичный одностраничный сайт в стиле Apple, сфокусированный на крупном рендере кружки с ценой со скидкой, интерактивных точках-выносках с техническими фишками, слайдере выбора цвета товара и прозрачных условиях доставки',
    'Разработайте динамичный и контрастный спортивный лендинг в черно-желтых тонах, содержащий форму регистрации на онлайн-трансляцию, эффектную фотографию тренера с его регалиями, список тезисов будущего вебинара и визуализацию чек-листа в подарок'
]

const cases_points = document.querySelectorAll('.cases-slider-points-item');

async function typeText(el, text, speed = 50, signal) {
    for (let i = 0; i <= text.length; i++) {
        if (signal?.aborted) return;
        el.textContent = text.slice(0, i);
        await delay(speed);
    }
}

let typingController = null;

async function showCaseText(task_text, requirements_text) {
    typingController?.abort();
    typingController = new AbortController();
    const { signal } = typingController;

    task.textContent = '';
    requirements.textContent = '';

    await Promise.all([
        typeText(task, task_text, 40, signal),
        typeText(requirements, requirements_text, 40, signal)
    ]);
}

function updatePoints(index) {
    cases_points.forEach((point, i) => {
        point.classList.toggle('is-active', i === index);
    });
}

function goToSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    } else if (index >= slideCount) {
        index = 0;
    }
    console.log('слайд', index);
    currentIndex = index;
    updatePoints(index);

    showCaseText(tasks_texts[index], requirements_texts[index]).catch((err) => {
        console.log(err);
    });

    slides.style.transform = `translateX(${-index * 100}%)`;
}

let isMoving = false;

slides.addEventListener('transitionend', (e) => {
    if (e.target === slides) isMoving = false;
});

function move(step) {
    if (isMoving) return;
    isMoving = true;
    goToSlide(currentIndex + step);
}

prevButton.addEventListener('click', () => move(-1));
nextButton.addEventListener('click', () => move(1));

goToSlide(0);

const cases_anim = [
    document.querySelector('.cases-title'),
    document.querySelector('.cases-slider'),
    document.querySelector('.cases-text')
]


async function casesfooterAnimation(el) {
    for (const item of el) {
        if (item) {
            item.classList.add('is-active');
            await delay(200)
        }
    }
}

const cases_observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            casesfooterAnimation(cases_anim).catch((err) => {
                console.error(err);
            })
        }
    })
},options)

if (cases_anim[0]) {
    cases_observer.observe(cases_anim[0]);
}

const footer_trigger = document.querySelector('.footer');

const footer_anim = [
    document.querySelector('.footer-title'),
    document.querySelector('.footer-tg'),
    document.querySelector('.footer-vk'),
    document.querySelector('.footer-whatsapp')
]

const footer_observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            casesfooterAnimation(footer_anim).catch((err) => {
                console.error(err);
            })
        }
    })
},options)

if (footer_trigger) {
    footer_observer.observe(footer_trigger);
}