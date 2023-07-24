import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import VisionImage from '../../images/about1.jpg';
import StoryImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

import './about.css';

const About = () => {
  return (
   <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam 
      suscipit consequatur odio, animi est rerum ut repudiandae ad sit!
    </Header>

    <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src= {StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat 
              eligendi praesentium eaque deserunt hic? Iure, possimus! Explicabo ab 
              consectetur suscipit! Reiciendis asperiores vel quos! Tempora voluptatum 
              culpa ipsam deserunt aliquam! Eligendi voluptatibus veniam nam tempore unde 
              ipsa, ex at ipsam repellat, recusandae in sit? Voluptatibus quibusdam
              eos sit distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam suscipit 
              quidem temporibus quam at, explicabo esse magni eveniet, quae accusantium nihil 
              repellat vero voluptas architecto minima omnis enim rem!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsum officiis 
              eveniet nisi culpa dolores.
            </p>
          </div>
        </div>
    </section>

    <section className='about__vision'>
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat 
              eligendi praesentium eaque deserunt hic? Iure, possimus! Explicabo ab 
              consectetur suscipit! Reiciendis asperiores vel quos! Tempora voluptatum 
              culpa ipsam deserunt aliquam! Eligendi voluptatibus veniam nam tempore unde 
              ipsa, ex at ipsam repellat, recusandae in sit? Voluptatibus quibusdam
              eos sit distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam suscipit 
              quidem temporibus quam at, explicabo esse magni eveniet, quae accusantium nihil 
              repellat vero voluptas architecto minima omnis enim rem!.
            </p>
           
          </div>
          <div className="about__section-image">
            <img src= {VisionImage} alt="Our Vision" />
          </div>
        </div>
    </section>

    <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src= {MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat 
              eligendi praesentium eaque deserunt hic? Iure, possimus! Explicabo ab 
              consectetur suscipit! Reiciendis asperiores vel quos! Tempora voluptatum 
              culpa ipsam deserunt aliquam! Eligendi voluptatibus veniam nam tempore unde 
              ipsa, ex at ipsam repellat, recusandae in sit? Voluptatibus quibusdam
              eos sit distinctio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam suscipit 
              quidem temporibus quam at, explicabo esse magni eveniet, quae accusantium nihil 
              repellat vero voluptas architecto minima omnis enim rem!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsum officiis 
              eveniet nisi culpa dolores.
            </p>
          </div>
        </div>
    </section>

   </>
  )
}

export default About