import React from 'react'

export default function AddIngredient() {
    return (
        <>
            <div className="Ingredients  flex flex-col">
                <div className="flex flex-row justify-between">
                    <h4>Ingredient Measurement</h4>
                    <div className="flex flex-row justify-between">
                        <div>
                            <input type="radio" id="Whole Numbers" name="numberType" value="Whole Numbers" />
                            <label for="Whole Numbers">Whole Numbers</label>
                        </div>
                        <div>
                            <input type="radio" id="Fractions" name="numberType" value="Fractions" />
                            <label for="Fractions">Fractions</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">

                    <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block appearance-none w-1/6" type="number" id="amountNum" name="amountNum" min="1" max="99" step="1" value="1" placeholder="0"></input>

                    <span className="text-5lx">/</span>

                    <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block appearance-none w-1/6" type="number" id="amoutDem" name="amoutDem" min="1" max="99" step="1" value="4" placeholder="0"></input>

                    <select className=" w-2/6 border border-gray-400 rounded-lg py-2 px-4 mb-4 block " id="unit" name="unit">
                        <option value="tsp">tsp</option>
                        <option value="Tbsp">Tbsp</option>
                        <option value="cup">cup</option>
                        <option value="oz">oz</option>
                        <option value="pint">pint</option>
                        <option value="quart">quart</option>
                        <option value="gallon">gallon</option>
                        <option value="pound">pound</option>
                    </select>

                    <button className="w-2/6 bg-red-500 hover:bg-gray-400 text-white py-2 px-4 h-10 rounded focus:outline-none focus:shadow-outline" type="button">
                        Remove Ingredient
              </button>

                </div>
                <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" value="Cosher Salt" placeholder="Ingredients Name" />
            </div>


            <div className="Ingredients  flex flex-col">
                <span>Ingredient Measurement</span>
                <div className="flex flex-row">

                    <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block appearance-none w-1/6" type="number" id="amountNum" name="amountNum" min="1" max="99" step="1" placeholder="0"></input>

                    <span className="text-5lx">/</span>

                    <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block appearance-none w-1/6" type="number" id="amoutDem" name="amoutDem" min="1" max="99" step="1" value="1" placeholder="0"></input>

                    <select className=" w-2/6 border border-gray-400 rounded-lg py-2 px-4 mb-4 block " id="unit" name="unit">
                        <option value="tsp">tsp</option>
                        <option value="Tbsp">Tbsp</option>
                        <option value="cup">cup</option>
                        <option value="oz">oz</option>
                        <option value="pint">pint</option>
                        <option value="quart">quart</option>
                        <option value="gallon">gallon</option>
                        <option value="pound">pound</option>
                    </select>

                    <button className="w-2/6 bg-green-500 hover:bg-gray-400 text-white py-2 px-4 h-10 rounded focus:outline-none focus:shadow-outline" type="button">
                        Add Ingredient
              </button>

                </div>
                <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Ingredients Name" />
            </div>

        </>
    )
}
