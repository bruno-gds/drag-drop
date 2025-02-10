const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-upload');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('hover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('hover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('hover');
    
    const file = e.dataTransfer.files[0];

    if (file) alert('Arquivo recebido: ' + file.name);
});

// dropArea.addEventListener('click', () => {
//   fileInput.click();
// });

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if (file) alert('Arquivo selecionado: ' + file.name);
});