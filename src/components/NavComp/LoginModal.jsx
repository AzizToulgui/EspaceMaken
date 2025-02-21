"use client"

import { useState } from "react"
import { FiUser } from "react-icons/fi"
import "./LoginModal.css"

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login submitted", { email, password })
    // Reset form and close modal
    setEmail("")
    setPassword("")
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={toggleModal} className="login-button">
        <FiUser size={20} />
        <span>Login</span>
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginModal

