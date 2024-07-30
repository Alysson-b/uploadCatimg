const botao = document.getElementById('botao')
const catImages = document.getElementById('catIMages')

botao.addEventListener('click', fetchCatImages)

function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10')
     .then(response => {
        if(!response.ok){
            throw new Error("A solicitaçao nao foi bem-sucedida")
        }
        return response.json();

    })
    .then(data => {
        catImages.innerHTML = '';
        data.forEach(cat => {
            const catImage = document.createElement('img')
            catImage.src = cat.url;
            catImage.alt = 'imagem de gato';
            catImages.appendChild(catImage)
        })
    })
    .catch(error => {
        console.error('Erro: ' , error)
    })
};