import InputFile from "./modules/InputFile.js";
import  InputRange from "./modules/InputRange.js";
import * as siteFunctions from "./modules/functions.js";
import Choices from "choices.js";

siteFunctions.isWebp();

const SECTION_HEADER_SELECTOR = ".js-last-accent";
const SELECT_SELECTOR = ".js-select-input";
const FILE_INPUT_WRAP_SELECTOR = ".js-file-input";
const RANGE_INPUT_SELECTOR = ".js-range-input";

document.addEventListener('DOMContentLoaded', function () {

    initHeaders();
    initSelect();
    initFileInputs();
    initRangeInputs();
});

function initHeaders() {
    const sectionHeaders = document.querySelectorAll(SECTION_HEADER_SELECTOR);

    if (sectionHeaders.length) {
        sectionHeaders.forEach(header => {
            const text = header.textContent.trim();
            let words = text.split(' ');

            if (words.length === 0) return;

            let lastWord = words.pop();
            let newText = words.join(' ') + ' <span class="accent-text">' + lastWord + '</span>';
            header.innerHTML = newText;
        });
    }

}

function initSelect() {
    const selects = document.querySelectorAll(SELECT_SELECTOR);

    if (selects.length) {
        selects.forEach(select => {
            const choices = new Choices(select, {
                searchEnabled: false,
                itemSelectText: ''
            });
        });
    }
}

function initFileInputs() {
    const fileInputs = document.querySelectorAll(FILE_INPUT_WRAP_SELECTOR);

    if (fileInputs.length) {
        fileInputs.forEach(file => {
            new InputFile(file);
        })
    }
}

function initRangeInputs() {
    const inputs = document.querySelectorAll(RANGE_INPUT_SELECTOR);

    if (inputs.length) {
        inputs.forEach(input => {
            new InputRange(input);
        })
    }
}