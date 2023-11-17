import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import React from "react"
import ProductDetail from "../../Components/ProductDetail"
function Artist() {
   const [items, setItems ] = useState(null)
   
   useEffect (() =>{
   fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Artist/')
   .then(response => response.json())
   .then(data=> setItems(data))
   },[])

const [albums, setAlbum] = useState(null)
   useEffect(() =>{
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Album/')
    .then(response => response.json())
    .then(alb=> setAlbum(alb))
   }
    )
   
   return (
      <>
        <Layout>
        
  
          <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg'>
              {
                  items?.map(item => (
                      <Card key={item.id} data = {item}/>
                  ))
              }
  
          </div>
          <div className="grid gap-4 grid-cols-4">
            {
              albums?.map(album => (
                <ProductDetail key={album.id} alb={album}/>
              ))
            }
          </div>
          <ProductDetail/>
        </Layout>
      </>
    )
  }
  export default Artist