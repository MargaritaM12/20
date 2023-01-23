fetch('https://jsonplaceholder.typicode.com/photos')
    .then(respon => respon.json())
    .then(data => getIMG(data))

function getIMG(data) {
    data.forEach(item => {
        const img = document.createElement('img')
        img.src = item
            .thumbnailUrl
            document
            .body
            .append(img)
    })
}