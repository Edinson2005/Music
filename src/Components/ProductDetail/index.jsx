import { useContext } from 'react'
import { CartContext } from "../../Context";
import './style.css'
import cerrar from '../../assets/img/cerrar.png'

const ProductDetail = () => {
    const context = useContext(CartContext);

    // console.log('Producto a Mostrar: ', context.productToShow)
    


    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Albums</h2>
                <div onClick={() => context.closeProductDetail() }>
                <div>
                    <img src={cerrar} style={{width:'20px'}} alt="" />
                </div>

                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.photo} 
                alt={context.productToShow.name} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{context.productToShow.name}</span>
                
                <span className='font-medium text-md'>Genre:{context.productToShow.id_genre}</span>

                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductDetail