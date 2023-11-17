import { useContext } from "react";
import { CartContext } from "../../Context"

const Card = (data) => {
  const context = useContext(CartContext);


  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }


  return (
    <div
      className="bg-red-500 cursor-pointer w-60 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}>


      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
          {data.data.nationality}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.photo}
          alt=""
        />
      </figure>

      <p className="flex justify-center">
        <span className="text-center">{data.data.name}</span>
      </p>

      { showProduct && (showProduct)}
      
    </div>
    
  );
};

export default Card;
