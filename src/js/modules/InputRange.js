

const INPUT_SELECTOR = ".js-range-input__input";
const INPUT_COUNT_SELECTOR = ".js-range-input__count";

export class InputRange {
    wrap = null;
    inputNode = null;
    countNode = null;


    constructor(wrap) {
        this.wrap = wrap;

        this.init();
    }

    init() {
        const inputNode = this.wrap.querySelector(INPUT_SELECTOR);
        const countNode = this.wrap.querySelector(INPUT_COUNT_SELECTOR);

        if (countNode) {
            this.countNode = countNode;
        }

        if (inputNode) {
            this.inputNode = inputNode;
            this.countNode.innerText = this.inputNode.value + "%";

            this.inputNode.addEventListener("input", () => {
                this.countNode.innerText = this.inputNode.value + "%";

            });
        }


    }


}

export default InputRange