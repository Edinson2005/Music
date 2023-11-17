import React, { useState } from 'react';

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
    setActiveCard(props.data.id); 
  };

  return (
    <div
      className={`bg-red-500 cursor-pointer w-50 h-60 rounded-lg ${
        activeCard === props.data.id ? 'border-2 border-blue-500' : ''
      }`}
      onClick={handleCardClick}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {props.data.nationality}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={props.data.photo}
          alt=""
        />
      </figure>

      <p className="flex justify-center">
        <span className="text-center">{props.data.name}</span>
      </p>

      {}
      {showDetails && (
        <div className="bg-gray-200 p-4 rounded-lg mt-2">
          {}
          <p>Detalles de la tarjeta: {props.data.name}</p>
          <p>Otro detalle: {props.data.otroDetalle}</p>
          {}
        </div>
      )}
    </div>
  );
};

export default Card;
