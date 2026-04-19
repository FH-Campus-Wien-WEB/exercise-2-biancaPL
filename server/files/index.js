window.onload = function () {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const bodyElement = document.querySelector("body");

    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

      movies.forEach(movie => {

        // ARTICLE
        const article = document.createElement("article");
        article.id = movie.imdbID;

        // TITLE
        const title = document.createElement("h1");
        title.textContent = movie.Title;

        // IMAGE
        const img = document.createElement("img");
        img.src = movie.Poster;

        // INFO
        const info = document.createElement("p");
        info.textContent = movie.Runtime + " min | " + movie.Released;

        // GENRES
        const genreDiv = document.createElement("div");

        (movie.Genres || []).forEach(g => {
          const span = document.createElement("span");
          span.classList.add("genre");
          span.textContent = g;
          genreDiv.appendChild(span);
        });


        //Directors
        const directorsTitle = document.createElement("h3");
        directorsTitle.textContent = "Directors";

        const directorsList = document.createElement("ul");
        movie.Directors.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        directorsList.appendChild(li);
      });

      article.appendChild(directorsTitle);
      article.appendChild(directorsList);

      //Writers

      const writersTitle = document.createElement("h3");
      writersTitle.textContent = "Writers";

      const writersList = document.createElement("ul");
      movie.Writers.forEach(w => {
        const li = document.createElement("li");
        li.textContent = w;
        writersList.appendChild(li);
      });

      article.appendChild(writersTitle);
      article.appendChild(writersList);

      // Actors

      const actorsTitle = document.createElement("h3");
      actorsTitle.textContent = "Actors";

      const actorsList = document.createElement("ul");
      movie.Actors.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        actorsList.appendChild(li);
      });

      article.appendChild(actorsTitle);
      article.appendChild(actorsList);


        // PLOT
        
        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        // EDIT BUTTON (WICHTIG NEU!)
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        console.log(movie.imdbID);
        editBtn.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        // APPEND
        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(info);
        article.appendChild(genreDiv);
        article.appendChild(plot);
        article.appendChild(directorsTitle)
        article.appendChild(directorsList);
        article.appendChild(writersTitle);
        article.appendChild(writersList);
        article.appendChild(actorsTitle);
        article.appendChild(actorsList);
        article.appendChild(editBtn);

        bodyElement.appendChild(article);
      });

    } else {
      bodyElement.innerHTML =
        "Daten konnten nicht geladen werden, Status " +
        xhr.status;
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};