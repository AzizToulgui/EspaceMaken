
import { useState, useEffect } from "react"
import "./BlogsCarousel.scss"
import { Link } from "react-router-dom"
const hardcodedNewsData = [
  {
    id: 1,
    title: "The Future of Web Development",
    content:
      "Explore the latest trends shaping the future of web development, from AI integration to serverless architectures.",
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049883083.jpg?fit=721%2C414&ssl=1", 
    },
  {
    id: 2,
    title: "Mastering React Hooks",
    content: "Dive deep into React Hooks and learn how to build more efficient and maintainable components.",
    image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049934457.jpg?resize=720%2C480&ssl=1", 
  },
  {
    id: 3,
    title: "The Rise of JAMstack",
    content:
      "Discover why JAMstack is becoming increasingly popular and how it's changing the web development landscape.",
      image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049940235.jpg?resize=720%2C480&ssl=1", 
    },
]

function BlogsCarousel({ autoSlide = true, showButtons = true }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let interval
    if (autoSlide) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoSlide])

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((current) => (current + 1) % hardcodedNewsData.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((current) => (current - 1 + hardcodedNewsData.length) % hardcodedNewsData.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handleIndicatorClick = (index) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <div className="news-carousel-container">
       <div className="card-container-title">
        <h1>Our latest Blogs</h1>
        <hr />
      </div>
      <div className="news-carousel">
        <div className="carousel-container">
          {hardcodedNewsData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === activeIndex ? "active" : ""} ${
                index === (activeIndex - 1 + hardcodedNewsData.length) % hardcodedNewsData.length ? "prev" : ""
              } ${index === (activeIndex + 1) % hardcodedNewsData.length ? "next" : ""}`}
            >
              <div className="carousel-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="image-overlay" />
              </div>
              <div className="carousel-content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <Link to="/Blogs-Read-more" className="read-more">Read More</Link>
              </div>
            </div>
          ))}
        </div>

        {showButtons && (
          <div className="carousel-controls">
            <button className="carousel-control prev" onClick={handlePrev} disabled={isAnimating}>
              <span className="arrow">‹</span>
            </button>
            <button className="carousel-control next" onClick={handleNext} disabled={isAnimating}>
              <span className="arrow">›</span>
            </button>
          </div>
        )}

        <div className="carousel-indicators">
          {hardcodedNewsData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
              disabled={isAnimating}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsCarousel

