import * as siteFunctions from "./modules/functions.js";


siteFunctions.isWebp();

const SECTION_HEADER_SELECTOR = ".js-last-accent";

document.addEventListener('DOMContentLoaded', function () {

    initHeaders();

});

function initHeaders() {
    console.log('%cjs starts', 'padding: 5px; background: hotpink; color: black;');
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