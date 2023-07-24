import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
   images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log("HELLO");
  console.log(images);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laboriosam ad perferendis non corporis dolorum sit, eum ipsa, 
          et quam, molestias maxime ullam voluptates.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return (
              <article key={index}>
                <img src={image} alt={`Gallery Imag-${index + 1}`} />
              </article>
            )})
          }
        </div>
      </section>
    </>
  )
}

export default Gallery