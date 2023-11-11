import logo from '../../assets/img/logo.png';
function Home() {
    return (
        <>
            <div className='text-center text-5xl font-serif'>
                <h1>MUSIC</h1>
            </div>
            <div className='flex justify-center '>
                <img src={logo}
                    style={{ width: '400px' }} />
            </div>
            <div className='text-center text-xl font-serif'>
                <p>"Deja que la música encuentre su camino a través de tu alma"</p>
            </div>
        </>
    )
}

export default Home