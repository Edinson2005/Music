import perfil from '../../assets/img/perfil.png'
import 'boxicons'

function Description(){
    return(
        <>
        <div>
        <img src={perfil} style={{width:'150px', margin:'10px'}} alt="" />
        </div>


        <p className='flex justify-center pr-80 ml-10 text-lg font-serif'>
        "Hi, my name is Edinson Becoche, I am 18 years old, and I am a student in the Software Analysis and Development program at CTPI. I come from the municipality of Totoró in the Paniquitá reserve. I really enjoy music, video games, and learning to program."
</p>
        <h1 className='text-xl flex justify-center font-serif m-20' >
            Social Networks</h1>

        <div className='flex justify-center b-5'>
        <box-icon type='logo' size='lg' name='facebook'></box-icon>
        <box-icon type='logo' size='lg' name='whatsapp-square'></box-icon>
        <box-icon type='logo' size='lg' name='github'></box-icon>
        <box-icon type='logo' size='lg' name='instagram'></box-icon>
        </div>
        </>
    )

}
export default Description