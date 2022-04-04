import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';

const DetailsPage = (props) => {

   const [items, setItems] = useState([])
   const [images, setImages] = useState([])

   useEffect(() => {

        axios.get('https://images-api.nasa.gov/search', {params: { q: props.name?.toLowerCase(), media_type:"image" }})
        .then(res => {
            setItems(res.data.collection.items.slice(1, 2))
        })
     
    }, [items]);


  return (
    <table >
    <tbody>
      {items
        .map((item) =>{     

            axios.get(item.href)
            .then(res => {
                setImages(res.data.slice(1, 2))
            })

          return(
              <Fragment>
                <tr>
                <td >{item.data[0].description}</td>
                <td >
                {
                images
                 .map((image) =>{ 
                     return (
                         <div><img src={image} width="200" height="300" /></div>
                     )
                    
                })
                }
                
                </td>
                </tr>
            </Fragment>
          )
      })}
      </tbody>
      </table>
  )

};

export default DetailsPage;