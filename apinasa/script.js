document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const refreshButton = document.getElementById("refreshButton");

    refreshButton.addEventListener("click", refreshImages);


    function getAPODImages() {
    
        const apiKey = 'x9m83BIf9bNbWsgkxW51bh6LdUXXfJUA0uuuf3yF';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=8`;

        return fetch(apiUrl)
            .then(response => response.json())
            .catch(error => console.error('Erro ao obter imagens:', error));
    }


    function refreshImages() {
        getAPODImages().then(images => {
            displayImages(images);
        });
    }

    function displayImages(images) {
        galleryContainer.innerHTML = "";

        images.forEach(image => {
            const imageCard = document.createElement("div");
            imageCard.classList.add("image-card");

            const title = document.createElement("p");
            title.textContent = image.title;

            const date = document.createElement("p");
            date.textContent = image.date;

            const imageElement = document.createElement("img");
            imageElement.src = image.url;
            imageElement.alt = image.title;

            imageCard.appendChild(title);
            imageCard.appendChild(date);
            imageCard.appendChild(imageElement);

            galleryContainer.appendChild(imageCard);
        });
    }

    refreshImages();
});

