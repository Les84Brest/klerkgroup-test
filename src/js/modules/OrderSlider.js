import Splide from '@splidejs/splide';

const SLIDER_WRAP_SELECTOR = ".js-order-steps__slider";
const SLIDER_DISABLED_CLASS = "slider--disabled";

export class OrderSlider {
    wrap = null;
    slider = null;
    items = null;

    constructor(wrap) {
        this.wrap = wrap;

        this.init();
    }

    init() {
        this.slider = this.wrap.querySelector(SLIDER_WRAP_SELECTOR);

        const items = this.wrap.querySelectorAll('.splide__slide');

        if (items.length > 5) {
            const sliderOptions = {
                type: "slide",
                perMove: 1,
                autoWidth: true,
                pagination: false,
                //height: "60px",
                arrows: false,
                lazyLoad: true,
                drag: "free",
                wheel: true,
                autoHeight: true

            };

            this.slider = new Splide(this.slider, sliderOptions).mount();


        } else {
            this.slider.classList.add(SLIDER_DISABLED_CLASS);
        }




    }
}

export default OrderSlider;