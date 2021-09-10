function appendImageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function run() {
 for (let i = 1 ; i <= 30 ; i++){
    appendImageElem('dog', i);
 }
}

run();