"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isProjectPage, setIsProjectPage] = useState(false)

  useEffect(() => {
    // Check if we're on a project detail page
    const checkProjectPage = () => {
      setIsProjectPage(window.location.pathname.startsWith("/project/"))
    }

    checkProjectPage()

    const handleScroll = () => {
      // Show navbar after scrolling past first section or always show on project pages
      if (isProjectPage || window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Update active section based on scroll position (only on main page)
      if (!isProjectPage) {
        const sections = ["home", "portfolio", "about", "contact"]

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("popstate", checkProjectPage)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("popstate", checkProjectPage)
    }
  }, [isProjectPage])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = (href: string, id: string) => {
    if (isProjectPage) {
      // If on project page, navigate to main page with hash
      window.location.href = `/${href}`
    } else {
      // If on main page, use normal anchor navigation
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: "项目", href: "#portfolio", id: "portfolio" },
    { name: "关于我", href: "#about", id: "about" },
    { name: "联系我", href: "#contact", id: "contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-effect",
          isVisible || isProjectPage ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => handleNavClick("#home", "home")}
            className="text-xl font-bold text-primary glow-text cursor-pointer"
          >
            未来引力场
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href, link.id)}
                className={cn(
                  "relative font-medium transition-colors hover:text-primary cursor-pointer",
                  !isProjectPage && activeSection === link.id ? "text-primary" : "text-foreground",
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    !isProjectPage && activeSection === link.id ? "w-full" : "w-0",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 glass-effect md:hidden transition-transform duration-300 flex flex-col justify-center",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.id)}
              className="text-2xl font-medium hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
