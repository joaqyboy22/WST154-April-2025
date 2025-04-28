const form = document.getElementById('movieForm');
        const movieTitleElement = document.getElementById('movieTitle');
        const movieDescriptionElement = document.getElementById('movieDescription');
        const movieYearElement = document.getElementById('movieYear');
        const imageUrlElement = document.getElementById('imageUrl');
        const movieListElement = document.getElementById('movieList');

        let movieList = JSON.parse(localStorage.getItem('movieList')) || [];

        function renderMovieList() {
            movieListElement.innerHTML = '';

            movieList.forEach((movie, index) => {
                const movieItem = document.createElement('div');
                movieItem.className = 'movie-item';

                movieItem.innerHTML = `
                    <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                    <img src="${movie.imageUrl}" alt="${movie.title}">
                `;

                movieListElement.appendChild(movieItem);
            });
        }

        function deleteMovie(index) {
            movieList.splice(index, 1);
            localStorage.setItem('movieList', JSON.stringify(movieList));
            renderMovieList();
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const newMovie = {
                title: movieTitleElement.value.trim(),
                description: movieDescriptionElement.value.trim(),
                year: movieYearElement.value.trim(),
                imageUrl: imageUrlElement.value.trim()
            };

            movieList.push(newMovie);
            localStorage.setItem('movieList', JSON.stringify(movieList));
            renderMovieList();

            form.reset();
        });

        renderMovieList();