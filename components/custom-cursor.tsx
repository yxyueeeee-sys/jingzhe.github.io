"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover effect for interactive elements
    const handleLinkHover = () => setIsActive(true)
    const handleLinkLeave = () => setIsActive(false)

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add class to body to hide default cursor
    document.body.classList.add("hide-cursor")

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea')
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover)
      el.addEventListener("mouseleave", handleLinkLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      document.body.classList.remove("hide-cursor")

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover)
        el.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  return (
    <div
      className={`cursor-dot ${isActive ? "active" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}
