import Gallery from "../components/Gallery";

const Favorites = () => {
    return(
    <>
    <div className="App">
        <Gallery favorites={true}/>
     </div>
    </>
    );
};
export default Favorites;