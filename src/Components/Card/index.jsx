const Card = ( data ) => {
    return (
      <div className="bg-red-500 cursor-pointer w-50 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
          <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
            {data.data.nationality}
          </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={data.data.photo}
            alt=""
          />
          <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ">
            
          <box-icon type='solid' name='album'></box-icon>
          </div>
          </figure>


      <p className="flex justify-center">
        <span className="text-center">{data.data.name}</span>
        
      </p>
    </div>
  );
};
export default Card