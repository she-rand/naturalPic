import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();
const PHOTO_URL = "/photos.json";

const ContextProvider = ({children}) => {
    useEffect( () => {
        const getData = async()=>{
            const response=await fetch(PHOTO_URL)
            const data= await response.json()
           
            const all=await Promise.all(data.photos.map(async (elem)=>{
                return  {url:elem.src.original,description:elem.alt,filled:elem.liked}
          }))
          console.log(all)
          setPics(all);
        }
           
        getData();
    },[])
    
const [pics, setPics]=useState([]);

    return(
        <MyContext.Provider value={{pics,setPics}}>
            {children}
        </MyContext.Provider>

    );
}
export default ContextProvider;
