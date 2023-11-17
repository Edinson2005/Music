import logo from '../../assets/img/logo.png';
function Home() {
    return (
        <>
            <div className='text-center text-5xl font-serif pt-20'>
                <h1>MUSIC</h1>
            </div>
            <div className='flex justify-center '>
                <img src={logo}
                    style={{ width: '400px' }} />
            </div>
            <div className='text-center text-xl font-serif'>
                <p>"Let the music find its way through your soul"</p>
            </div>
        </>
    )
}

export default Home