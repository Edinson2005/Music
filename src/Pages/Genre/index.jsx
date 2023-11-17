import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import CardGenre from "../../Components/CardGenre"
import React from "react"


function Genre() {
   const [items, setItems ] = useState(null)
   
   useEffect (() =>{
   fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Genre/')
   .then(response => response.json())
   .then(dat=> setItems(dat))
   },[])
   
   return (
      <>
        <Layout>
        
  
          <div className='grid gap-4 grid-cols-5 w-full max-w-screen-lg'>
              {
                  items?.map(item => (
                      <CardGenre key={item.id} data = {item}/>
                  ))
              }
  
          </div>
        </Layout>
      </>
    )
  }
  export default Genre