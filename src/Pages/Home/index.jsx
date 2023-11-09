import logo from '../../assets/img/logo.png';
function Home (){
    return(
        <>
        <h1 style={{textAlign:'center',fontSize:'2rem'}}>MUSIC</h1>
        <div style={{display: 'flex', justifyContent: 'center' }}>
          <img src={logo} style={{width:'500px' }} />
          </div>
       </>
    )
}

export default Home