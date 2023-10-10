// https://jsonplaceholder.typicode.com/comments


// 1 xndir uneqn  api  harcum comentneri  boxer nkarelu hamar 
// sarqum eq randzin ej vortex  ejn  baceluc (render linelu jamanak ,  boxeri  dizayov  pordzum eq nkarel)
// comentneri  informacian, zangvaci karucvac@ ktesneq  harcum@ katarelu jamanak, karox eq kirarel kam fetch kam axios tarberakner

// inchpes nayev avelacnum eq loadingi gaxapar ejn reload anelu  jamanak qani der patasxan chi ekel 
// ekrani vra tesnenq  loading kam inch vor animaca

import React, { useEffect, useState } from "react";
import './style.scss'
import axios from "axios";

export const Template1 = ()=>{

    const [loading, steLoading] = useState(false)
    const [items, setItems] = useState([])

   useEffect(()=>{
        getComment()
   }, [])

   const getComment = async () =>{
        steLoading(true)
        let coment = await axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((rsponse)=>{setItems(response.data)})

        if(coment.data){
            steLoading(false)
        }
   }

    return <div>
        {loading ? <p>Loading...</p>:null}
        <div>
            <p>{coment.data.postID}</p>
        </div>
    </div>
}