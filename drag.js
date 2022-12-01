const drop_file = document.querySelector('.drager');
const icon = drop_file.querySelector('.icon i');
const header = drop_file.querySelector('header');
const span = drop_file.querySelector('span');
const button = drop_file.querySelector('button');
let file;
const input = drop_file.querySelector('input');


drop_file.addEventListener('dragover', (e) => {
    e.preventDefault();
    drop_file.classList.add('active');
    icon.classList.add('img');
    header.classList.add('img');
    header.textContent = 'Do You Want Upload Your Image';
    span.classList.add('img');
    button.classList.add('background');
});

drop_file.addEventListener('dragleave', (e) => {
    drop_file.classList.remove('active');
    icon.classList.remove('img');
    header.classList.remove('img');
    header.textContent = 'Drag and Drop Images';
    span.classList.remove('img');
    button.classList.remove('background');
});

drop_file.addEventListener('drop', (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    
    showFile();
});

function showFile() {
    let fileType = file.type;
    let type_imgs_format = ['image/jpeg', 'image/jpg', 'image/png'];
    
    if (type_imgs_format.includes(fileType)) {
        
        let file_reader = new FileReader(); 
        file_reader.onload = () => {
            let file_url = file_reader.result;
            let img_tag = `<img src="${file_url}">`;
            drop_file.innerHTML = img_tag;
        }
        file_reader.readAsDataURL(file);
    }else{
        alert('this is incorrect img format');
        drop_file.classList.remove('active');
    }   
}

button.onclick = () => {
    input.click();
}

input.addEventListener('change', function() {
    file = this.files[0];
    showFile();
    drop_file.classList.add('active');
})
