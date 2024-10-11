import React from "react";
import IonIcon from "@reacticons/ionicons";

function Card({ product,favourites,handleFavClick }) {
    return (
        <div key={product.id} className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
            <img src={product.image} className='w-full h-64 object-cover'/>
            <div className="p-2">
                <h3 className="font-bold text-lg py-5 bg-white rounded-lg">{product.name}</h3>
                <p className="font-semibold bg-gray-100 rounded lg py-5">Description: {product.description}</p>
                <p className="font-medium  py-5">Cost: {product.price}</p>
                <button className="text-red-500" onClick={() => {
                    handleFavClick( product.id)
                }} >
                    { favourites.includes( product.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
                </button>
            </div>
        </div>
    );
}

export default Card;