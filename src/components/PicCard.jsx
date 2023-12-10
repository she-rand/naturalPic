import { useContext } from "react";
import { Card } from "react-bootstrap";
import { MyContext } from "../context/MyContext";
import IconHeart from "./IconHeart";
const PicCard = ({ pic,favorites }) => {
  const { description, url, filled } = pic;

  const {pics,setPics}=useContext(MyContext);

  const changeFav = (pic) => {
    const newPics = pics.map((item) =>
    item.url === pic.url ? { ...item, filled: !pic.filled } : item
  );

  
  setPics(newPics);
  console.log(newPics)
  };
  
  

  return (
    <div className="photo" style={{backgroundImage: `url(${url})`}}>
        {!favorites &&
        <button onClick={() => changeFav(pic)}>
        <IconHeart filled={filled}/>
      </button>
      }
        
        
        
       

       
       
        <p>{description}</p>
    </div>
  );
};
export default PicCard;