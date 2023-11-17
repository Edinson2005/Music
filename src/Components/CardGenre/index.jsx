const CardGenre = ( data ) => {
    return (
      <div className="bg-red-500 cursor-pointer w-40 h-50 rounded-lg"
      >
        


      <p className="flex justify-center">
        <span className="text-center">{data.data.name}</span>
        
      </p>
    </div>
  );
};
export default CardGenre