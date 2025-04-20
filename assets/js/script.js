// Wait for the document to be fully loaded
$(document).ready(() => {
    // Preloader
    $(window).on("load", () => {
      $("#preloader").fadeOut(1000)
    })
  
    // Initialize theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light"
    setTheme(currentTheme)
  
    // Theme toggle functionality
    $("#theme-toggle").on("click", () => {
      const currentTheme = $("body").attr("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
    })
  
    // Function to set theme
    function setTheme(theme) {
      $("body").attr("data-theme", theme)
      if (theme === "dark") {
        $("#theme-toggle i").removeClass("fa-moon").addClass("fa-sun")
      } else {
        $("#theme-toggle i").removeClass("fa-sun").addClass("fa-moon")
      }
    }
  
    // Navbar active state on scroll
    $(window)
      .on("scroll", () => {
        const scrollDistance = $(window).scrollTop()
  
        // Navbar background change on scroll
        if (scrollDistance > 50) {
          $(".navbar").addClass("navbar-scrolled")
        } else {
          $(".navbar").removeClass("navbar-scrolled")
        }
  
        // Scroll to top button visibility
        if (scrollDistance > 300) {
          $("#scroll-top").addClass("active")
        } else {
          $("#scroll-top").removeClass("active")
        }
  
        // Add active class to nav links based on page scroll position
        $(".section-padding").each(function (i) {
          if ($(this).position().top <= scrollDistance + 100) {
            $(".navbar-nav .nav-link.active").removeClass("active")
            $(".navbar-nav .nav-link").eq(i).addClass("active")
          }
        })
      })
      .scroll()
  
    // Smooth scrolling for nav links
    $(".navbar-nav .nav-link, .hero-btns a, .footer-links a").on("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault()
        const hash = this.hash
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 70,
          },
          800,
        )
  
        // Close mobile menu if open
        $(".navbar-collapse").collapse("hide")
      }
    })
  
    // Scroll to top button click event
    $("#scroll-top").on("click", () => {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800,
      )
    })
  
    // Contact form submission
    $("#contactForm").on("submit", function (e) {
      e.preventDefault()
  
      // Get form values
      const name = $("#name").val()
      const email = $("#email").val()
      const subject = $("#subject").val()
      const message = $("#message").val()
  
      // Here you would typically send the form data to a server
      // For demonstration, we'll just log it to console and show an alert
      console.log("Form submitted:", { name, email, subject, message })
  
      // Show success message (in a real application, this would happen after successful AJAX call)
      alert("Thank you for your message! I will get back to you soon.")
  
      // Reset form
      this.reset()
    })
  
    // Initialize AOS animation library if available
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      })
    }
  })
  