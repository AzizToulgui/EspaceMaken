import yourLogo from "../images/yourLogo.png";
import "./Sponser.css";

function Slider () {
  const sliderStyles = {
    "--width": "100px",
    "--height": "100px",
    "--quantity": 8,
  };

  return (
    <div className="slider" reverse="true" style={sliderStyles}>
      <div className="list">
        <div className="item" style={{ "--position": 1 }}>
          <img src={yourLogo} alt="Slide 1" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={yourLogo} alt="Slide 2" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={yourLogo} alt="Slide 3" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={yourLogo} alt="Slide 4" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={yourLogo} alt="Slide 5" />
        </div>

        <div className="item" style={{ "--position": 6 }}>
          <img src={yourLogo} alt="Slide 7" />
        </div>

        <div className="item" style={{ "--position": 7 }}>
          <img src={yourLogo} alt="Slide 9" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={yourLogo} alt="Slide 10" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
