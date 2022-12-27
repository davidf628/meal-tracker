import React from 'react';
import { RecipeSearchResultsListItem } from './RecipeSearchResultsListItem';

export const RecipeSearchResultsList = ({ ingredients, recipes }) => {
    return (
    <>
        { recipes.map((recipe) => {
            return (<RecipeSearchResultsListItem
                key={recipe.id}
                recipe={recipe}
                ingredients={ingredients}
            />)
        })}
    </>);
}