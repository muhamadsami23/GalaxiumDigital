"use client"

import { useEffect } from "react"

export default function ClickBalls() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ["#ffffff", "#a1a1aa", "#e5e7eb"] // light minimal palette
      const numBalls = Math.floor(Math.random() * 2) + 3 // 3–4 balls

      for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement("div")

        // random size: small, medium, large
        const sizeOptions = [6, 10, 16, 22] // px
        const size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)]

        ball.style.position = "fixed"
        ball.style.left = `${e.clientX - size / 2}px`
        ball.style.top = `${e.clientY - size / 2}px`
        ball.style.width = `${size}px`
        ball.style.height = `${size}px`
        ball.style.borderRadius = "50%"
        ball.style.pointerEvents = "none"
        ball.style.background = colors[Math.floor(Math.random() * colors.length)]
        ball.style.zIndex = "-1"
        ball.style.opacity = "0.8"
        ball.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out"

        document.body.appendChild(ball)

        requestAnimationFrame(() => {
          ball.style.transform = `translate(${(Math.random() - 0.5) * 250}px, ${
            (Math.random() - 0.5) * 250
          }px) scale(${Math.random() * 1.2 + 0.8})`
          ball.style.opacity = "0"
        })

        setTimeout(() => {
          ball.remove()
        }, 1500)
      }
    }

    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
