import React from "react";

function Header({ headerContent }) {
    return(
        <div key={headerContent.id} className="bg-pink-100 rounded-lg shadow-md overflow-hidden">
        <img src={headerContent.image} className='w-full h-64 object-cover'/>
        <div className="p-2">
            <h3 className="font-bold text-lg py-5 bg-white rounded-lg">{headerContent.name}</h3>
            <p className="font-semibold bg-gray-100 rounded lg py-5">Description: {headerContent.description}</p>
            <p className="font-medium  py-5">Cost: {headerContent.price}</p>
        </div>
    </div>
    );
}


export default Header;