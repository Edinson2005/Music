
const CardGenre = ( data ) => {
    return (
      <div className="bg-red-500 cursor-pointer w-50 h-100 rounded-lg"
      >
        

      <h1 className="flex justify-center">{data.data.id}</h1>
      <p className="flex justify-center">
        
        <br/>
        <span className="text-center text-lg">
          {data.data.name}</span>
        <span className="">{}</span> 
        
      </p>
    </div>
  );
};
export default CardGenre