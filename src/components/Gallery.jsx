import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import PicCard from "./PicCard";

const Gallery = () => {
const {pics}=useContext(MyContext);
    return(
      <>
      <div className="gallery grid-columns-5 p-3">
        {pics.map((pic, i)=>(
          <div key={i}>
            <PicCard pic={pic}/>
          </div>
        ))}
        </div>;
      </>
    ) 
  };
  export default Gallery;
  