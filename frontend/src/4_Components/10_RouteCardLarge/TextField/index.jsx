import React from "react";

const TextField = props => {

    const { name, total_time, total_kcal, total_carbs_in_grams, number_of_drinks, carbs_needed_from_food,
        slices_of_gingerbread, carbs_from_drink_in_grams, carb_energy_value } = props.data


    return (
        <>
            <h1>Overall</h1>
            <ul>
                <li>{props.fullName}, you are in shape to climb {name} in {(total_time[0] === '0') ?
                    total_time[1] : total_time.substring(0,2)} hour and {(total_time[3] === '0') ? total_time[4] :
                    total_time.substring(5,3)} minutes.</li>
                <li>During the ride, you will burn {total_kcal} kcal, and will need need approximately {total_carbs_in_grams}g
                    carbohydrates from you food and drink, which will equal about {carb_energy_value} kcal.</li>
                <li>Be sure to properly fuel yourself throughout the ride, so you do not crash towards the end!</li>
            </ul>
            <h1>Fluids</h1>
            <ul>
                <li>For your ride, you will need to bring approx. {number_of_drinks} 75cl bottle(s) of isotonic drink with
                    you on the climb.</li>
                <li>An isotonic drink contains around 45 grams of carbs per 75cl bottle, so you will already receive
                    {(' ' + carbs_from_drink_in_grams)} grams of carbs from your isotonic drink.</li>
            </ul>
            <h1>Food</h1>
            <ul>
                <li>The remaining {carbs_needed_from_food}g of carbs will come from food. This equals about {slices_of_gingerbread} slices of gingerbread.
                    Refer to nutrition information of your favorite, ride tested snacks to bring the right amount of food.</li>
            </ul>
        </>
    )}

export default TextField