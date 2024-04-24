import React from 'react';
import shop from '../assets/shop.jpeg';


function Story() {
    return (
        <div>
            <h2 className='text-center font-bold text-2xl pb-3' style={{marginBottom: '1rem'}}>
                Story of my virtual coffee shop</h2>
            <p className='max-w-md mt-8 text-justify' style={{ marginRight: '2.5rem', marginLeft:'2.5rem', marginBottom:'2.5rem'}}>
            This virtual coffee shop was founded in 1997.
        It began with 3 friends who met each other in Spain.
        and their own mixtures of coffee. Now, 33 years after Bella Coffee sells
        pure coffee to 123 countries. Its unique mixtures and aromas made of this coffee
        a perfect choice.
        This virtual coffee shop was founded in 1997.
        It began with 3 friends who met each other in Spain.
        They loved how to cook, and invent their own food preparations,
        and their own mixtures of coffee. Now, 33 years after Bella Coffee sells
        pure coffee to 123 countries. Its unique mixtures and aromas made of this coffee
        a perfect choice.
        This virtual coffee shop was founded in 1997.
        It began with 3 friends who met each other in Spain.
        They loved how to cook, and invent their own food preparations,
        and their own mixtures of coffee. Now, 33 years after Bella Coffee sells
        pure coffee to 123 countries. Its unique mixtures and aromas made of this coffee
        a perfect choice.
            </p>
            <div className='flex justify-center'>
                <img src={shop} alt='shop' className='mt-8 w-48 rounded-r-lg' />
        </div>
       </div> 
    );
}

export default Story;