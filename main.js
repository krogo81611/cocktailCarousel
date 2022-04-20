document.querySelector('button').addEventListener('click',getFetch)

function getFetch() {
    const cocktail = document.querySelector('.cocktailName').value
    const DBURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`

    fetch(DBURL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let interval = 3000;
        data.drinks.forEach((drink,index) => {
        setTimeout(() => {
        document.querySelector('h2').innerText = drink.strDrink
        document.querySelector('img').src = drink.strDrinkThumb
        document.querySelector('.instructions').innerText = drink.strInstructions 
        }, index*interval)


        })

    })
    .catch(err => {
        console.log(`Error ${err}`)
    })
}

