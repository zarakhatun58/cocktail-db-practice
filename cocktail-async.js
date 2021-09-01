const searchDrink = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //console.log(searchText);

    //clear data
    searchField.value = '';

    if (searchText == '') {
        'not found details'

    }
    else {
        const url = `www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText} `;
        //console.log(url)
        //'please input right word'
        try {

            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data))
                .then(data => displaySearchResult(data.drinks))



            // const res = await fetch(url);
            // const data = await res.json();
            // displaySearchResult(data.drinks);

        }
        catch (error) {
            console.log(error);
        }
    }


    // fetch(url)
    //     .then(res => res.json())
    //     //.then(data => console.log(data))
    //     .then(data => displaySearchResult(data.drinks))


}

const displaySearchResult = drinks => {

    // console.log(drinks)
    const searchResult = document.getElementById(search - result)
    // clear innerHtml
    searchResult.textContent = '';
    if (drinks.length == 0) {
        'result not found wrong '
    }

    drinks.forEach(drink => {
        //console.log(drink)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `<div onclick="loadDrinkDetails(${drink.strCategory})" class="card h-100">
        <img src="${drink.strDrinkThumb} " class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.strInstructions}</p>
        </div>
    </div>`
        searchResult.appendChild(div);

    })


}

const loadDrinkDetails = async drinkId => {
    //console.log(drinkId);
    const url = ` www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}
    `;

    const res = await fetch(url);
    const data = await res.json();
    displayDrinkDetail(data.drinks[0])
}
const displayDrinkDetail = drink => {
    console.log(drink);
    const drinkDetails = document.getElementById('drink-details');
    drinkDetails.textContent = '';

    const div = document.createElement('div');
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





