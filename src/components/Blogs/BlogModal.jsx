import { useEffect, useRef } from "react"
import "./BlogModal.css"

function BlogModal({ isOpen, onClose, blog }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <button onClick={onClose} className="close-button" aria-label="Close modal">
          ✕
        </button>

        <div className="modal-image-container">
          <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="modal-image" />
        </div>

        <div className="modal-content">
          <h2 className="modal-title">{blog.title}</h2>

          <div className="modal-meta">
            <span>{blog.date}</span>
            <span className="meta-separator">•</span>
            <span>By {blog.author}</span>
          </div>

          <div className="modal-body">{blog.content}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogModal