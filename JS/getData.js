async function getData(recipeName) {
    try{
        // console.log(recipeName);

        let data;

        if(recipeName != undefined){
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);

          data = await response.json();

        } else 
        {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

             data = await response.json();
        }      

        return data;

    } catch{
        console.log("error:", error);

    }
}
export default getData;