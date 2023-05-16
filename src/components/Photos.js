import Gallery from "./Gallery";
import photo1 from "../assets/gallery/patricia-cupcakes.jpeg"
import photo2 from "../assets/gallery/pexels-alina-k-9866764.jpg";


const photos = [photo1, photo2];

function Photos() {
  return (
    <div className="App">
      <Gallery photos={photos} />
    </div>
  );
}

export default Photos;
