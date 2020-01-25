/* Mary wrote a recipe book and is about to publish it, but because of a new European law,
she needs to update and include all measures in grams.
Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), considering
1 tbsp = 15g and 1 tsp = 5g, append to the end of the measurement the biggest equivalent
integer (rounding up).
Examples
"2 tbsp of butter"    -->  "2 tbsp (30g) of butter"
"1/2 tbsp of oregano" -->  "1/2 tbsp (8g) of oregano"
"1/2 tsp of salt"     -->  "1/2 tbsp (3g) of salt"
"Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill" -->
"Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"
 */

function convertRecipe(recipe){
    recipe = recipe.split(" ");

    for (let i = 0; i < recipe.length; i++) {
        let x = recipe[i];
        if(recipe[i].includes('/')) {
            x = parseInt(recipe[i], 10) / recipe[i][recipe[i].length - 1];
        }
        if(recipe[i + 1] === 'tbsp') {
            x = Math.ceil(x * 15);
            recipe.splice(i + 2, 0, `(${x}g)`);
        }
        else if(recipe[i + 1] === 'tsp') {
            x = Math.ceil(x * 5);
            recipe.splice(i + 2, 0, `(${x}g)`);
        }
    }
    return recipe.join(" ");
}