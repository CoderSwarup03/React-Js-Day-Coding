import React from 'react'
import { Link, useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const recipesData = {
    1: {
      name: "Lutchi-Paneer",
      img: "https://i.ytimg.com/vi/53J5KYwLREY/maxresdefault.jpg",
      ingredients: ["Maida (flour)", "Paneer", "Salt", "Oil", "Ginger paste", "Tomato puree"],
      steps: [
        "Knead dough using maida and water, make small balls.",
        "Roll into small circles and deep fry until puffed.",
        "In another pan, sauté paneer with ginger paste and tomato puree.",
        "Add salt and spices, cook for a few minutes.",
        "Serve hot paneer curry with crispy luchis."
      ]
    },
    2: {
      name: "Mutton Biriyani",
      img: "https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg",
      ingredients: ["Basmati rice", "Mutton", "Potatoes", "Onions", "Ghee", "Yogurt", "Biryani masala"],
      steps: [
        "Marinate mutton with yogurt and biryani masala for 2 hours.",
        "Fry onions until golden and set aside.",
        "Parboil rice with whole spices.",
        "Layer mutton, fried onions, and rice alternately in a pot.",
        "Seal and cook on low flame (dum) for 30–40 minutes.",
        "Serve hot with salad and raita."
      ]
    },
    3: {
      name: "Rosogollar Payesh",
      img: "https://peekncooksa.blob.core.windows.net/index-recipe/Rosogollar_payesh2.jpg",
      ingredients: ["Milk", "Sugar", "Rice", "Cardamom", "Rasgullas", "Dry fruits"],
      steps: [
        "Boil milk and add rice, stirring occasionally.",
        "Cook until rice softens and mixture thickens.",
        "Add sugar and cardamom powder, mix well.",
        "Add rasgullas and cook for 2–3 minutes on low flame.",
        "Garnish with dry fruits and serve chilled or warm."
      ]
    }
  };
  const { id } = useParams()
  const recipe = recipesData[id]

  if (!recipe) {
    return <div className='text-2xl font-semibold text-center'>Recipe not found</div>
  }
  return (
    <>
      <div className='max-w-4xl mx-auto p-4 border border-green-500 rounded-md'>
        <img src={recipe.img} alt={recipe.name} className='w-full h-[350px] object-cover shadow-md rounded-md' />
        <h1 className='text-2xl font-semibold p-2'>{recipe.name}</h1>
        <h2 className='text-xl font-semibold mt-2 p-2 underline'>Ingredients:</h2>
        <ul className='list-disc pl-6 text-gray-700 text-md font-bold'>
          {recipe.ingredients.map((item, inded) => (<li key={inded}>{item}</li>))}
        </ul>
        <h2 className='text-xl font-semibold mt-2 p-2 underline'>Steps:</h2>
        <ol className='list-decimal pl-6 text-gray-700 text-md font-bold'>
          {recipe.steps.map((item, index) => (<li key={index}>{item}</li>))}
        </ol>

        <Link to={'/'} className='inline-block text-md font-semibold text-green-500 hover:underline'>
             ← Back to Recipes
        </Link>
      </div>
    </>
  )
}

export default RecipeDetails