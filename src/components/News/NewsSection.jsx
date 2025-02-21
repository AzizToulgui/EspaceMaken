import "./NewsSection.css";
import NewsLayout from "./NewsLayout";

function NewsSection() {
  return (
    <div className="card-section">
    <div className="card-container">
      <div className="card-container-title">
        <h1>Our latest News</h1>
        <hr />
      </div>
     <NewsLayout/>
    </div>
    </div>
  );
}
export default NewsSection;
