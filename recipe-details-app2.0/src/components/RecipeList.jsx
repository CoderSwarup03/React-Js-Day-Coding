import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = () => {
    const recipe = [
        {
            id: 1,
            name: "Lutchi-Paneer",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhgrP4xoJk74jdoOFF693TAdc5n_2mG94cWiPsH1i6Uq1Lm8poKuKrj8l-usNlGyG8Hs&usqp=CAU",
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
            <div className='flex justify-center items-center gap-3'>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
                    {recipe.map((item) => {
                        return (
                            <RecipeItem  key={item.id} name={item.name} img={item.img} desc={item.desc}/>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default RecipeList