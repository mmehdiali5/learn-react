export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {List()}
        </div>
    );
}

function List() {
    const listItems = recipes.map(recipe =>
        <li key={recipe.id}>
            {Array.from(recipe.ingredients).map(ing => <span key={"ing" + recipe.id + ing}>{ing} </span>)}
        </li>
    );
    return <ul>{listItems}</ul>;
}