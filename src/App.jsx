import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Menu,
  X,
  Upload,
  Target,
  Globe,
  MousePointerClick,
  RefreshCw,
  ShoppingCart,
  PenTool,
  LifeBuoy,
  Sun,
  Moon,
} from 'lucide-react'
import { useTheme } from './ThemeContext.jsx'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: Globe,
    title: 'Custom Website Design',
    text: 'Fast, modern websites built to represent your brand properly and turn visitors into customers — not just look good in a portfolio.',
  },
  {
    icon: MousePointerClick,
    title: 'High-Converting Landing Pages',
    text: 'Dedicated pages engineered around a single goal: booked calls, form fills, or sales. Built to test, not just to ship.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesigns',
    text: 'Outgrown your current site? We rebuild it from the ground up — same brand, better structure, faster load times.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    text: 'Online stores built to sell — clean product pages, fast checkout, and a backend you can actually manage yourself.',
  },
  {
    icon: PenTool,
    title: 'Copywriting & Content',
    text: 'Every page written to match how your customers actually search and speak — not filled with generic filler.',
  },
  {
    icon: LifeBuoy,
    title: 'Website Care & Maintenance',
    text: 'Ongoing updates, backups, and fixes after launch, so your site stays fast, secure, and online.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className={`relative inline-flex items-center h-8 w-[60px] shrink-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-1 transition-colors duration-300 ${className}`}
    >
      <Sun className="absolute left-[7px] h-3.5 w-3.5 text-white/50 pointer-events-none" />
      <Moon className="absolute right-[7px] h-3.5 w-3.5 text-white/50 pointer-events-none" />
      <span
        className={`relative h-6 w-6 rounded-full bg-primary shadow-md flex items-center justify-center transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-[28px]' : 'translate-x-0'
        }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5 text-white" /> : <Sun className="h-3.5 w-3.5 text-white" />}
      </span>
    </button>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-8 py-6 sm:py-8 w-[calc(100%-2rem)] max-w-6xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center group">
            <img
              src="/logo-black.svg"
              alt="VOROQ"
              className="h-32 sm:h-40 w-auto transition-all duration-500"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          <div className="hidden lg:flex items-center gap-2 shrink min-w-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover px-3 py-1.5 rounded-full whitespace-nowrap transition-colors duration-300 hover:bg-primary hover:text-white ${
                  scrolled ? 'text-ink/70' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 shrink-0 whitespace-nowrap"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>

            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <img src="/logo-black.svg" alt="VOROQ" className="h-11 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 px-4 rounded-2xl border-b border-divider transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Custom Cursor + Magnetic Buttons
---------------------------------------------------------------- */
function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches)

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }
    const onDown = () => gsap.to([dot, ring], { scale: 0.7, duration: 0.25, ease: 'power2.out' })
    const onUp = () => gsap.to([dot, ring], { scale: 1, duration: 0.25, ease: 'power2.out' })
    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.4, duration: 0.35, ease: 'power2.out' })
      gsap.to(dot, { scale: 0, duration: 0.25, ease: 'power2.out' })
    }
    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.25, ease: 'power2.out' })
    }
    const onWindowLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
    const onWindowEnter = () => gsap.to([dot, ring], { opacity: 1, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onWindowLeave)
    document.addEventListener('mouseenter', onWindowEnter)

    const interactiveEls = document.querySelectorAll(
      'a, button, input, textarea, select, .magnetic-btn, [data-cursor-hover]'
    )
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    // Magnetic pull for buttons tagged .magnetic-btn
    const magneticEls = document.querySelectorAll('.magnetic-btn')
    const magneticCleanups = []
    magneticEls.forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })
      const onElMove = (e) => {
        const rect = el.getBoundingClientRect()
        xTo((e.clientX - (rect.left + rect.width / 2)) * 0.35)
        yTo((e.clientY - (rect.top + rect.height / 2)) * 0.35)
      }
      const onElLeave = () => {
        xTo(0)
        yTo(0)
      }
      el.addEventListener('mousemove', onElMove)
      el.addEventListener('mouseleave', onElLeave)
      magneticCleanups.push(() => {
        el.removeEventListener('mousemove', onElMove)
        el.removeEventListener('mouseleave', onElLeave)
      })
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onWindowLeave)
      document.removeEventListener('mouseenter', onWindowEnter)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
      magneticCleanups.forEach((fn) => fn())
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)
  const spotlightRef = useRef(null)
  const textRef = useRef(null)
  const particlesRef = useRef(null)
  const logoSpinRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // VOROQ wordmark arrives from a distance, approaching the camera
  useEffect(() => {
    if (!logoSpinRef.current) return
    gsap.set(logoSpinRef.current, {
      rotateX: 8,
      transformPerspective: 900,
      scale: 0.35,
      z: -900,
      filter: 'blur(5px)',
    })
    const tween = gsap.to(logoSpinRef.current, {
      scale: 1,
      z: 0,
      filter: 'blur(0px)',
      duration: 1.4,
      delay: 0.6,
      ease: 'power2.out',
    })
    return () => tween.kill()
  }, [])

  // Mouse-reactive spotlight glow + parallax depth
  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const hero = heroRef.current
    const spotlight = spotlightRef.current
    if (!isFinePointer || !hero || !spotlight || !textRef.current || !particlesRef.current) return

    const spotX = gsap.quickTo(spotlight, 'x', { duration: 0.7, ease: 'power3.out' })
    const spotY = gsap.quickTo(spotlight, 'y', { duration: 0.7, ease: 'power3.out' })
    const textX = gsap.quickTo(textRef.current, 'x', { duration: 1, ease: 'power3.out' })
    const textY = gsap.quickTo(textRef.current, 'y', { duration: 1, ease: 'power3.out' })
    const particlesX = gsap.quickTo(particlesRef.current, 'x', { duration: 0.8, ease: 'power3.out' })
    const particlesY = gsap.quickTo(particlesRef.current, 'y', { duration: 0.8, ease: 'power3.out' })

    let started = false

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top
      const offsetX = (localX / rect.width - 0.5) * 2
      const offsetY = (localY / rect.height - 0.5) * 2

      spotX(localX)
      spotY(localY)
      textX(offsetX * -12)
      textY(offsetY * -8)
      particlesX(offsetX * 28)
      particlesY(offsetY * 18)

      if (!started) {
        started = true
        gsap.to(spotlight, { opacity: 1, duration: 0.8, ease: 'power2.out' })
      }
    }
    const onLeave = () => gsap.to(spotlight, { opacity: 0, duration: 0.6, ease: 'power2.out' })

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/85 via-deep/55 to-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Mouse-follow spotlight */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 h-[560px] w-[560px] rounded-full opacity-0"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 40%, transparent 70%)',
          marginLeft: '-280px',
          marginTop: '-280px',
          mixBlendMode: 'screen',
          filter: 'blur(10px)',
        }}
      />

      {/* Decorative floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-accent/60 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-white/50 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div ref={textRef} className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <div className="hero-meta relative mb-10 flex justify-center animate-float">
            <div style={{ perspective: '900px' }}>
              <div
                ref={logoSpinRef}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    aria-hidden={i !== 0}
                    className="absolute inset-0 flex items-center justify-center font-display font-light uppercase tracking-[0.35em] text-4xl sm:text-5xl md:text-6xl select-none"
                    style={{
                      transform: `translateZ(${-i * 2.2}px)`,
                      opacity: i === 0 ? 1 : Math.max(0.15, 1 - i * 0.1),
                      color: i === 0 ? '#FFFFFF' : '#1F51FF',
                      textShadow:
                        i === 0
                          ? '0 0 4px rgba(255,255,255,0.95), 0 0 16px rgba(31,81,255,0.85), 0 0 40px rgba(31,81,255,0.5)'
                          : 'none',
                    }}
                  >
                    VOROQ
                  </span>
                ))}
                <span className="invisible block font-display font-light uppercase tracking-[0.35em] text-4xl sm:text-5xl md:text-6xl px-2">
                  VOROQ
                </span>
              </div>
            </div>
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-2 h-4 w-40 rounded-full bg-black/40 blur-xl"
              style={{ top: '100%' }}
            />
          </div>

          <p className="hero-meta font-mono text-xs uppercase tracking-[0.3em] text-white mb-6">
            Website & Landing Page Studio
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              Websites and landing pages
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              built to convert.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white text-base sm:text-lg mt-8 leading-relaxed">
            VOROQ designs and builds fast, modern websites and landing pages for businesses that
            want to look sharp online.
            <span className="text-white font-semibold"> Real pages, real content, no templates.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:VOROQ@voroq.co.uk"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              <Mail className="h-4 w-4" />
              VOROQ@voroq.co.uk
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Campaign Shuffler
---------------------------------------------------------------- */
function CampaignShuffler() {
  const { theme } = useTheme()
  const items = [
    { tag: 'Homepage', label: 'Hero + navigation layout', metric: 'v1 draft' },
    { tag: 'Landing Page', label: 'Above-the-fold concept', metric: 'v2 draft' },
    { tag: 'Style Guide', label: 'Type, color, spacing system', metric: 'Approved' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-[#F6F7F9] dark:bg-[#1B1D22] border border-black/10 dark:border-white/10 rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-black/50 dark:text-white/50">{item.metric}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-black dark:text-white leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#1F51FF' : theme === 'dark' ? '#33353B' : '#D9DBDF' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Lead Funnel (signature animation)
---------------------------------------------------------------- */
function LeadFunnel() {
  const { theme } = useTheme()
  const inkLine = theme === 'dark' ? '#F3F4F1' : '#0A0A0C'
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(7)

  const statuses = [
    { text: 'Homepage in design', label: 'Design', pulse: false },
    { text: 'Landing page built', label: 'Build', pulse: true },
    { text: 'QA & browser testing', label: 'QA', pulse: false },
    { text: 'Page shipped live', label: 'Live', pulse: true },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Live') {
          setCount((c) => c + 1)
        }
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const drops = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 15 },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 12 },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 17 },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 13 },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 16 },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 12 },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 15 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{
        background:
          theme === 'dark'
            ? 'linear-gradient(180deg, #17181D 0%, #131419 70%, #0F1014 100%)'
            : 'linear-gradient(180deg, #FFFFFF 0%, #F6F7F9 70%, #EEF0F3 100%)',
      }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-primary/5 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Target className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">
            Build pipeline
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-black dark:text-white tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-black/45 dark:text-white/45">this week</span>
        </div>
      </div>

      {/* Funnel mouth at top */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <polygon points="30,4 370,4 300,16 100,16" fill={inkLine} fillOpacity="0.1" />
        <line x1="30" y1="4" x2="370" y2="4" stroke={inkLine} strokeOpacity="0.35" strokeWidth="2" />
        {[100, 200, 300].map((x) => (
          <circle key={x} cx={x} cy="4" r="2.4" fill={inkLine} fillOpacity="0.5" />
        ))}
      </svg>

      {/* Falling lead field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${d.size}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 3px rgba(31,81,255,0.45))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id={`lead-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C93FF" />
                <stop offset="100%" stopColor="#1F51FF" />
              </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="9" fill={`url(#lead-${i})`} />
            <circle cx="9" cy="9" r="2.2" fill="white" fillOpacity="0.55" />
          </svg>
        ))}
      </div>

      {/* Conversion baseline */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="7" x2="200" y2="7" stroke={inkLine} strokeOpacity="0.18" strokeWidth="1.2" />
        {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((x) => (
          <line key={x} x1={x} y1="5" x2={x} y2="9" stroke={inkLine} strokeOpacity="0.12" strokeWidth="1" />
        ))}
      </svg>

      {/* Conversion ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary-dark/40"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative h-2 w-2 rounded-full bg-primary">
            {status.pulse && <span className="absolute inset-0 rounded-full bg-primary animate-ping" />}
          </span>
          <span key={status.text} className="font-mono text-[10px] truncate text-primary-dark" style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 text-primary-dark">
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Discovery Scheduler
---------------------------------------------------------------- */
function DiscoveryScheduler() {
  const { theme } = useTheme()
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-[#F6F7F9] dark:bg-[#1B1D22] border border-black/10 dark:border-white/10 rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50">Week 14 · Apr</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          Kickoff call
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-white dark:bg-white/5 text-black dark:text-white'
            }`}
          >
            <span className="font-mono text-[9px] text-black/45 dark:text-white/45">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-primary text-white scale-[1.02] shadow-md shadow-primary/20' : 'bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50'
        }`}
      >
        {step >= 3 ? '✓ Call booked' : 'Pick a time'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill={theme === 'dark' ? '#F3F4F1' : '#0A0A0C'}
            stroke={theme === 'dark' ? '#0A0A0C' : '#FFFFFF'}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Design',
      heading: 'Design Concepts',
      sub: 'Explore before you commit',
      text: 'We explore layout, type, and color directions before writing a line of code — so you see the direction before we build it.',
      Component: CampaignShuffler,
    },
    {
      eyebrow: '02 / Build',
      heading: 'Build Pipeline',
      sub: 'Tracked from first page to launch',
      text: 'Every page moves through design, build, and QA before it ships — so nothing goes live half-finished.',
      Component: LeadFunnel,
    },
    {
      eyebrow: '03 / Launch',
      heading: 'Launch Day',
      sub: 'From build to live',
      text: 'We handle domain, hosting, and go-live day-of — so launch is smooth, not stressful.',
      Component: DiscoveryScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative bg-white dark:bg-background py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">
            ╱ How we build
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-black dark:text-ink mt-4 leading-[1.05] tracking-tight">
            From idea
            <span className="block font-serif italic font-medium text-primary-dark mt-1">to live site.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-white dark:bg-surface border border-black/10 dark:border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45 dark:text-muted">{card.eyebrow}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-black/25 dark:text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-black dark:text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-sm mt-1">{card.sub}</p>
                <p className="text-black/55 dark:text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — Three core numbers
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Track record',
      target: 50,
      suffix: '+',
      label: 'sites launched',
      desc: 'From local service businesses to funded startups — we’ve designed and built the websites behind their online presence.',
    },
    {
      n: '02',
      title: 'Retention',
      target: 98,
      suffix: '%',
      label: 'client retention',
      desc: 'Most clients come back for the next project — new pages, a redesign, or a second site.',
    },
    {
      n: '03',
      title: 'Coverage',
      target: 24,
      suffix: '/7',
      label: 'uptime monitoring',
      desc: 'We monitor hosting and uptime after launch, so your site stays online — not just the day it ships.',
    },
  ]

  return (
    <section id="results" ref={ref} className="relative bg-white dark:bg-background py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg-light dark:hidden opacity-60" />
      <div className="absolute inset-0 grid-bg-dark hidden dark:block opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">
              ╱ Results
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-black dark:text-ink leading-[1.05] tracking-tight">
              The numbers
              <span className="block font-serif italic font-medium text-primary-dark">behind the pitch.</span>
            </h2>
          </div>
          <p className="text-black/55 dark:text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three figures that define how we work. Not marketing — just what we deliver every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 dark:bg-divider rounded-5xl overflow-hidden border border-black/10 dark:border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-white dark:bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/45 dark:text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-black dark:text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">{p.label}</p>
              <p className="text-black/55 dark:text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-black/10 dark:bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">
                {p.n}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Discover & Plan',
      tagline: 'We start with a plan, not a template.',
      text: 'We audit your current site (if you have one), look at competitors, and map out the pages, structure, and content you actually need.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      alt: 'Team mapping a website plan on a whiteboard',
      meta: 'Step 1 / Discover',
    },
    {
      num: '02',
      title: 'Design & Build',
      tagline: 'We ship fast, without cutting corners.',
      text: 'Your website and landing pages get designed and built page by page, with your real content — not lorem ipsum placeholders.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Developer building a website on a laptop',
      meta: 'Step 2 / Build',
    },
    {
      num: '03',
      title: 'Launch & Support',
      tagline: 'We don’t disappear after launch.',
      text: 'We handle the technical side of going live, then stay on for updates, fixes, and improvements as your site grows.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Website performance dashboard',
      meta: 'Step 3 / Launch',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative bg-white dark:bg-background px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ How we work</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-black dark:text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-white to-[#F5F6F8] dark:from-surface dark:to-background border border-black/10 dark:border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/45 dark:text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full">
                    VOROQ Protocol
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/20 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-black dark:text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-black/55 dark:text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale contrast-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-background/85 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / VOROQ
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-white dark:bg-background text-black dark:text-ink overflow-hidden">
      <div className="absolute inset-0 grid-bg-light dark:hidden opacity-40" />
      <div className="absolute inset-0 grid-bg-dark hidden dark:block opacity-40" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-black/[0.025] dark:bg-white/[0.025] blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-black/50 dark:text-muted">╱ Everything you need</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              One partner,
              <span className="block font-serif italic font-medium text-black dark:text-ink">every page.</span>
            </h2>
          </div>
          <p className="text-black/60 dark:text-muted max-w-md text-base leading-relaxed">
            We handle the full site build — from first wireframe to launch day — so you're not
            stitching together five different vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 dark:bg-divider rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-white dark:bg-surface p-7 sm:p-9 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-divider flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-black/60 dark:text-ink/60 group-hover:text-white dark:group-hover:text-black" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-black/30 dark:text-muted uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-black/55 dark:text-muted text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Fast, Secure Builds',
      text: 'Modern code and proper hosting — not a bloated page builder held together with plugins.',
    },
    {
      Icon: Award,
      title: 'Proven Design System',
      text: 'A refined visual system used across every build, adapted to your brand — not a generic template.',
    },
    {
      Icon: Clock,
      title: 'Fast Turnaround',
      text: 'Most websites and landing pages launch inside 2-4 weeks, not 2-4 months.',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white dark:bg-background py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Why teams trust us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-black dark:text-ink mt-3 tracking-tight">
            More than an agency.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white dark:bg-surface border border-black/10 dark:border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-black dark:text-ink mb-1.5">{title}</h3>
              <p className="text-black/55 dark:text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-black dark:text-ink mt-4 leading-[1.05] tracking-tight">
              Ready to
              <span className="block font-serif italic font-medium text-primary-dark">build?</span>
            </h2>
            <p className="text-black/55 dark:text-muted text-lg mt-6 leading-relaxed max-w-md">
              Tell us about your business and what kind of website or landing page you need. We'll
              get back to you within one business day.
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:VOROQ@voroq.co.uk" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-black/45 dark:text-muted">Email us</span>
                  <span className="font-display font-semibold text-black dark:text-ink text-lg">VOROQ@voroq.co.uk</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-black/45 dark:text-muted">Coverage</span>
                  <span className="font-display font-semibold text-black dark:text-ink text-lg">Remote — Worldwide</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Data security</p>
              <p className="text-sm text-black/55 dark:text-muted leading-relaxed">
                Your information stays with us. We only reach out about your enquiry and never
                sell data to third parties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#F6F7F9] dark:bg-surface border border-black/10 dark:border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email address" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Phone number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Company / Website" value={form.zip} onChange={(v) => setForm({ ...form, zip: v })} />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-muted mb-2 block">Your message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell us briefly about your project or goal..."
                      className="w-full bg-white dark:bg-background border border-black/10 dark:border-divider rounded-2xl px-4 py-3.5 text-black dark:text-ink placeholder-black/35 dark:placeholder-muted focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-black/15 dark:border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-black dark:text-ink text-sm">Attach files (brand assets, brief, etc.)</p>
                      <p className="text-xs text-black/50 dark:text-muted mt-1">Click or drag files here (max 5 files)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-black/50 dark:text-muted">We reply within one business day. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send message'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-black dark:text-ink mb-3">Thanks — we'll be in touch</h3>
                  <p className="text-black/55 dark:text-muted max-w-md mx-auto">We'll review your project and get back to you within one business day.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white dark:bg-background border border-black/10 dark:border-divider rounded-2xl px-4 py-3.5 text-black dark:text-ink placeholder-black/35 dark:placeholder-muted focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-white dark:bg-background text-black dark:text-ink overflow-hidden">
      <div className="absolute inset-0 grid-bg-light dark:hidden opacity-30" />
      <div className="absolute inset-0 grid-bg-dark hidden dark:block opacity-30" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-black/10 dark:border-divider pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Websites, built
            <span className="font-serif italic font-medium text-primary-dark block">to convert.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-black dark:text-ink max-w-md">
              VOROQ — websites and landing pages for businesses ready to grow.
            </p>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2">
            <img
              src="/logo-black.svg"
              alt="VOROQ"
              className="h-32 sm:h-40 w-auto -mt-[37px] sm:-mt-[46px] -ml-[112px] sm:-ml-[140px] mb-5 dark:invert"
            />
            <p className="text-black dark:text-ink text-sm leading-relaxed max-w-xs">
              A studio building fast, modern websites and landing pages for growing businesses.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black dark:text-ink mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-black dark:text-ink hover:text-primary transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black dark:text-ink mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:VOROQ@voroq.co.uk" className="text-black dark:text-ink hover:text-primary transition text-sm">
                  VOROQ@voroq.co.uk
                </a>
              </li>
              <li className="text-black dark:text-ink text-sm">Remote, Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-black/10 dark:border-divider flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/60 dark:text-muted">
              Accepting new clients
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-black/50 dark:text-muted text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms</Link>
            <span>© 2026 VOROQ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
