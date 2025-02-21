import { useState, useEffect } from "react"
import "./BlogsCarousel.scss"
import BlogModal from './BlogModal'  // Import the BlogModal component

const hardcodedNewsData = [
  {
    id: 1,
    title: "The Future of Web Development",
    content:
      "Explore the latest trends shaping the future of web development, from AI integration to serverless architectures.",
    image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049883083.jpg?fit=721%2C414&ssl=1",
    fullContent: "Web development is rapidly evolving, with new technologies and methodologies emerging at an unprecedented pace. This article delves into the cutting-edge trends that are shaping the future of web development, from the integration of artificial intelligence to the rise of serverless architectures. We'll explore how these advancements are not only changing the way developers work but also enhancing user experiences and pushing the boundaries of what's possible on the web.",
    date: "February 21, 2024",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    content: "Dive deep into React Hooks and learn how to build more efficient and maintainable components.",
    image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049934457.jpg?resize=720%2C480&ssl=1",
    fullContent: "React Hooks have revolutionized the way we build components in React, offering a more intuitive and flexible approach to state management and side effects. This comprehensive guide takes you on a journey through the world of React Hooks, from the basics to advanced techniques. Learn how to leverage useState, useEffect, useContext, and custom hooks to create more efficient, readable, and maintainable React applications.",
    date: "February 22, 2024",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "The Rise of JAMstack",
    content:
      "Discover why JAMstack is becoming increasingly popular and how it's changing the web development landscape.",
    image: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/10/FB_IMG_1697049940235.jpg?resize=720%2C480&ssl=1",
    fullContent: "JAMstack (JavaScript, APIs, and Markup) is more than just a buzzword; it's a modern web development architecture that's gaining traction for its performance, security, and developer experience benefits. This article explores the core principles of JAMstack, its advantages over traditional web architectures, and real-world examples of how companies are leveraging this approach to build faster, more secure, and scalable web applications.",
    date: "February 23, 2024",
    author: "Alex Johnson"
  },
]

function BlogsCarousel({ autoSlide = true, showButtons = true }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBlog, setCurrentBlog] = useState(null)

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

  const handleOpenModal = (blog) => {
    setCurrentBlog(blog)
    setIsModalOpen(true)
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
                <button onClick={() => handleOpenModal(item)} className="read-more">Read More</button>
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

      {currentBlog && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          blog={currentBlog}
        />
      )}
    </div>
  )
}

export default BlogsCarousel