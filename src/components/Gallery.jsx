import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import PicCard from "./PicCard";

const Gallery = ({favorites}) => {
const {pics}=useContext(MyContext);
    return(
      <>
      <div className="gallery grid-columns-5 p-3">
        {pics.map((pic, i)=>{
          if(!favorites){
            return(
            <div key={i}>
              <PicCard pic={pic} favorites={favorites}/>
            </div>
            )
          }else if(pic.filled){
            return(
              <div key={i}>
                <PicCard pic={pic} favorites={favorites}/>
              </div>
              )
          }
          
})}
        </div>;
      </>
    ) 
  };
  export default Gallery;
  