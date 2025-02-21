import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about">
         <div className="about-img">
        <img
          src="https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049883083.jpg?fit=721%2C414&ssl=1"
          alt="jam photo"
        />
      </div>
      <div className="about-text">
        <h2 className="about-title">ABOUT Espace Maken</h2>
        <p className="about-description">
          The El Jem Amphitheatre is a magnificent historical landmark and a
          testament to ancient Roman architecture. This UNESCO World Heritage
          Site, located in Tunisia, is renowned for its grandeur and remarkable
          preservation.
        </p>
        <ul  className="about-list">
          <li className="about-list-item">
            <span className="checkmark">►</span>
            Exceptional Roman engineering: Its massive stone structure stands as
            one of the largest amphitheaters in the Roman Empire.
          </li>
        </ul>
        <p className="about-description">
          El Jem Amphitheatre represents a bridge to the past, showcasing the
          innovation and artistry of Roman civilization. Today, it serves as
          both a historical wonder and a venue for cultural events, fostering
          admiration for Tunisia’s rich heritage.
        </p>
      </div>
   
    </div>
  );
}
export default AboutUs;
