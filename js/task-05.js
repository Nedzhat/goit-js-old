const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const setOutput = value => {
  spanRef.textContent = value;
};

const onInput = () => {
  if (inputRef.value) {
    setOutput(inputRef.value);
  } else {
    setOutput('Anonymous');
  }
};

inputRef.addEventListener('input', onInput);
