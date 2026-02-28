import React from 'react'
import { cn } from '../lib/utils'
import BlurImage from './utils/BlurImage'
import { Helmet } from 'react-helmet-async'

const About = () => {
	return (
		<section className='about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4'>
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

			{/* Background pattern */}
			<div
				className={cn(
					'absolute inset-0',
					'[background-size:20px_20px]',
					'[background-image:radial-gradient(#404040_1px,transparent_1px)]',
				)}
			/>
			{/* Faded radial gradient overlay */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

			{/* Content */}
			<div className='relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12'>
				{/* Profile Image */}
				<div className='w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800'>
					<BlurImage
						src='/profile_pic.png'
						blurhash='LAB._mEN5SkC-TNdofWX0hay}=WC'
						alt='Profile'
						className='w-full h-full'
					/>
				</div>

				{/* Text Content */}
				<div className='text-left text-neutral-300 max-w-2xl ml-8 md:ml-16'>
					<h1 className='text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8'>
						About Me.
					</h1>
					<p className='text-lg leading-relaxed mb-4'>
						I’m Dilshodbek Gulomov, a passionate and driven developer with a
						strong foundation in computer science and a keen interest in
						building impactful, intelligent digital solutions. I thrive at the
						intersection of software engineering and artificial intelligence,
						with hands-on experience in full-stack development, particularly
						using React, Next.js, Node.js and Python - and a growing expertise
						in machine learning.
					</p>
					<p className='text-lg leading-relaxed mb-4'>
						Currently pursuing my Master's in Computer Science at ELTE
						University in Budapest as a Stipendium Hungaricum Scholar, I
						continuously seek opportunities to apply my academic knowledge in
						real-world environments. I have a strong grasp of modern web
						technologies and deep learning frameworks like PyTorch, and I enjoy
						solving complex problems with clean, scalable code.
					</p>
					<p className='text-lg leading-relaxed mb-4'>
						I'm also deeply exploring the complexities of AI, focusing heavily
						on structuring machine learning projects and understanding advanced
						deep learning architectures. This journey is helping me build a
						strong analytical mindset and sharpen my skills in model
						development, system architecture, and product thinking, even as the
						AI landscape rapidly evolves.
					</p>
					<p className='text-lg leading-relaxed'>
						My goal is to work on challenging projects, learn from experienced
						mentors, and make meaningful contributions to the tech community as
						a versatile engineer.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
