const input = document.getElementById('textInput');
input.addEventListener('focus', () => {
    console.log(input.value);
});