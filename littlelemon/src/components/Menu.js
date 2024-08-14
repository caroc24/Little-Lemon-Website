import React from 'react';
import recipes from '../recipes';

export default function Menu(){
    return (
        <div className = 'menu-container'>
            <div className = 'menu-header'>
                <h2>This week's specials!</h2>
                <button>Order Menu</button>
            </div>

            /* Menu Cards */
            <div>
                {
                    recipes.map(recipe => <div key = {recipe.id}>
                        <img src={recipe.image} alt =''/>
                        <div>
                            <div>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
}