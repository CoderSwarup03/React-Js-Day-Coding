import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = () => {
    const recipe = [
        {
            id: 1,
            name: "Lutchi-Paneer",
            img: 'https://i.ytimg.com/vi/53J5KYwLREY/maxresdefault.jpg',
            desc: "Bengali Special Lutchi Paneer"
        },
        {
            id: 2,
            name: "Mutton Biriyani",
            img: "https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg",
            desc: "Authentic Kolkata-style Mutton Biriyani"
        },
        {
            id: 3,
            name: "Rosogollar Payesh",
            img: "https://peekncooksa.blob.core.windows.net/index-recipe/Rosogollar_payesh2.jpg",
            desc: "Traditional Bengali Dessert – Rosogollar Payesh"
        }
    ]

    return (
        <>
            <div className='flex justify-center mt-10 my-2 mx-1'>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {recipe.map((item) => {
                        return (
                            <RecipeItem key={item.id} item={item} />
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default RecipeList