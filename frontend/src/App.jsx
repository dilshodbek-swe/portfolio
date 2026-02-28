import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import EnterScreen from './components/EnterScreen'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Logbook from './components/LogBook'
import NotFound from './components/NotFound'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Helmet } from 'react-helmet-async'

function ChatBotWrapper() {
	const location = useLocation()
	const showChatBot = location.pathname !== '/logbook'
	return showChatBot ? <AIChatBot /> : null
}

function App() {
	const [started, setStarted] = useState(false)
	const [showLoader, setShowLoader] = useState(false)
	const [initialCheckDone, setInitialCheckDone] = useState(false)

	useEffect(() => {
		const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent)
		const isHome = window.location.pathname === '/'
		const alreadyVisited = sessionStorage.getItem('alreadyVisited')

		if (isBot) {
			setStarted(true)
		} else if (isHome && !alreadyVisited) {
			setStarted(false)
		} else {
			setStarted(true)
		}
		setInitialCheckDone(true)
	}, [])

	useEffect(() => {
		const warmUpServer = async () => {
			try {
				await fetch('https://portfolio-m60v.onrender.com/health')
				console.log(' Backend warmed up')
			} catch (err) {
				console.error('Backend warm-up failed:', err)
			}
		}

		warmUpServer()
	}, [])


	const handleStart = () => {
		sessionStorage.setItem('alreadyVisited', 'true')
		setStarted(true)
		setShowLoader(true)
	}

	if (!initialCheckDone) return null

	return (
		<>
			{/* Global SEO Metadata */}
			<Helmet>
				<title>Dilshodbek Gulomov | Full Stack Developer & AI Enthusiast</title>
				<meta
					name='description'
					content='Official portfolio of Dilshodbek Gulomov, a full stack developer skilled in Python, React, and Next.js, with a strong passion for Machine Learning and AI. Explore projects, skills, and experience.'
				/>
				<link rel='canonical' href='https://your-domain.com/' />
				<meta
					property='og:title'
					content='Dilshodbek Gulomov | Full Stack Developer'
				/>
				<meta
					property='og:description'
					content='Official portfolio of Dilshodbek Gulomov, a full stack developer skilled in Python, React, and Next.js, with a strong passion for Machine Learning and AI.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://your-domain.com/' />
				<meta
					property='og:image'
					content='https://your-domain.com/profile_pic.png'
				/>
				<meta
					property='og:site_name'
					content="Dilshodbek Gulomov's Portfolio"
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@YourTwitterHandle' />{' '}
				{/* Replace or remove if you don't use Twitter */}
				<meta
					name='twitter:title'
					content='Dilshodbek Gulomov | Full Stack Developer'
				/>
				<meta
					name='twitter:description'
					content='Official portfolio of Dilshodbek Gulomov, a full stack developer skilled in Python, React, and Next.js, with a strong passion for Machine Learning and AI.'
				/>
				<meta
					name='twitter:image'
					content='https://your-domain.com/profile_pic.png'
				/>
				<script type='application/ld+json'>
					{`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dilshodbek Gulomov",
              "url": "https://your-domain.com/",
              "sameAs": [
                "https://github.com/dilshodbek-swe",
                "https://www.linkedin.com/in/dilshodbek-gulomov/"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Open Source"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "ELTE University"
              },
              "image": "https://your-domain.com/profile_pic.png",
              "description": "Dilshodbek Gulomov is a passionate full-stack developer specializing in modern web technologies and Python, with a growing expertise in machine learning and deep learning, based in Budapest, Hungary."
            }
          `}
				</script>
			</Helmet>

			{/* UI Flow */}
			{!started ? (
				<EnterScreen onEnter={handleStart} />
			) : showLoader ? (
				<Loader onComplete={() => setShowLoader(false)} />
			) : (
				<Router>
					<div className='bg-white dark:bg-black'>
						<Navbar />
						<Routes>
							<Route path='/' element={<Hero />} />
							<Route path='/about' element={<About />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/skills' element={<Skills />} />
							<Route path='/logbook' element={<Logbook />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
						<Footer />
						<SpeedInsights />
					</div>
				</Router>
			)}
		</>
	)
}

export default App
