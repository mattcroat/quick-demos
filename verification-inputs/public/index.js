"use strict";
const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');
const handleInput = (e) => {
    const input = e.target;
    const nextSibling = input.nextElementSibling;
    const inputValue = input.value;
    if (nextSibling && inputValue) {
        nextSibling.focus();
    }
};
const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text');
    inputs.forEach((input, index) => input.value = paste[index] || '');
};
form.addEventListener('input', handleInput);
inputs[0].addEventListener('paste', handlePaste);
