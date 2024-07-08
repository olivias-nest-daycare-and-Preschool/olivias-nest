import { SectionHeading } from "../styles/common/SectionHeading.styled";
import "../styles/sections/Gallery/Gallery.css";
import "../styles/sections/Home/Beauty.css"
export const GallerySection = () =>{
    return (
        <>
       <div className="message">
</div>
<section className="section"  style={{marginTop:'15rem'}}>
   <SectionHeading>
                <h1>Take a look at our gallery</h1>
    </SectionHeading>
  <div className="grid">

    <div className="item">
      <div className="item" style={{backgroundImage: `url('./images/staff/Teachers.jpg')`}}>
      <div className="item__details">
        jelly-o brownie sweet
      </div>
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        Muffin jelly gingerbread 
      </div>
    </div>

    <div className="item item--medium">
      <div className="item__details">
        sesame snaps chocolate
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div>

    <div className="item item--full">
      <div className="item__details">
         jujubes cheesecake
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        Dragée pudding brownie
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div>

    <div className="item">
      <div className="item__details">
        powder toffee
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        pudding cheesecake
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        toffee bear claw 
      </div>
    </div>

    <div className="item">
      <div className="item__details">
        cake cookie croissant
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        liquorice sweet roll
      </div>
    </div>

    <div className="item item--large">
      <div className="item__details">
        chocolate marzipan
      </div>
    </div>

    <div className="item">
      <div className="item__details">
        sugar plum dragée
      </div>
    </div>
  </div>
</section>
        </>
    );
};