//document.getElementById('error-message').style.display = 'none';


const searchDrink = () => {
    const searchField = document.getElementById('search-field')

    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';
    if (searchText == '') {
        'not found details'
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.drinks))

        //.catch(error => displayError(error()));

    }
}

// const displayError = error => {
//     document.getElementById('error-message').style.display = 'block';
// }


const displaySearchResult = drinks => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if (drinks.length == 0) {

        'no result exit'
    }

    drinks.forEach(drink => {

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div onclick="loadDrinkDetails(${drink.strCategory})" class="card h-100">
        <img src="${drink.strDrinkThumb} " class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.strInstructions.slice(0, 25)}</p>
        </div>
    </div>`
        searchResult.appendChild(div);
    })

}

const loadDrinkDetails = drinkId => {

    const url = ` www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}
    `;
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data.drinks))
        .then(data => displayDrinkDetail(data.drinks[0]))

}

const displayDrinkDetail = drink => {
    console.log(drink)
    const drinkDetails = document.getElementById('drink-details')
    const div = document.createElementaa('div');
    div.classList.add('card')
    div.innerHTML = `<div class="card">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
     <div class="card-body">
   <h5 class="card-title">${drink.strDrink}</h5>
  <p class="card-text">${drink.strImageSource}</p>
<a href="${drink.strInstructionsIT}" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

    drinkDetails.appendChild(div);
}


