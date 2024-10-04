

const INPUT_SELECTOR = ".js-input-file__input";
const INPUT_TITLE_SELECTOR = ".js-input-file-title";

const DEFAULT_INPUT_TEXT = "прикрепить файл";

export class InputFile {
    wrap = null;
    input = null;
    title = null;
    fileCount = 0;

    constructor(wrap) {
        this.wrap = wrap;

        this.init();
    }

    init() {
        const inputNode = this.wrap.querySelector(INPUT_SELECTOR);

        if (inputNode) {
            this.inputNode = inputNode;
            this.inputNode.addEventListener("change", this.handleFileChange.bind(this));
        }

        const titleNode = this.wrap.querySelector(INPUT_TITLE_SELECTOR);
        if (titleNode) {
            this.title = titleNode;
        }
    }

    handleFileChange(event) {

        const count = event.target.files.length;

        count > 0
            ? this.changeInputTitle(count)
            : this.setDefaultInputTitle();
        // if (this.files && this.files.length >= 1) {
        //     countFiles = this.files.length;
        // }
        // console.log('%cфайл как-то выбран. спасибо', 'padding: 5px; background: DarkKhaki; color: Yellow;');
    }

    setDefaultInputTitle() {
        this.title.innerText = DEFAULT_INPUT_TEXT;
    }

    changeInputTitle(count) {
        this.title.innerText = `Выбран ${count} файл`;
    }
}

export default InputFile