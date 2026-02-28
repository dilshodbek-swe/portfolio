import React, { useRef } from 'react'
import { cn } from '../lib/utils'
import { CardSpotlight } from './ui/card-spotlight'
import {
	FaReact,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaPython,
	FaFigma,
	FaNodeJs,
  FaDocker
} from 'react-icons/fa'
import {
	SiTypescript,
	SiNextdotjs,
	SiExpress,
	SiPostman,
	SiFirebase,
  SiFlask,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiNestjs,
  SiJest,
  SiMongodb    
} from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'

const Skills = () => {
	const colors = [
		[138, 43, 226], // Purple
		[147, 112, 219], // Light Purple
		[186, 85, 211], // Medium Purple
		[153, 50, 204], // Dark Purple
		[218, 112, 214], // Orchid
		[221, 160, 221], // Plum
		[216, 191, 216], // Thistle
		[0, 105, 148],   // MySQL - Deep Blue
		[56, 189, 248], // Tailwind-like Sky Blue
		[70, 130, 180], // Postgresql
		[30, 41, 59], //Next.js - Slate Blue
		[255, 0, 128], // Framer Motion - Vibrant Pink
		[0, 199, 255], // Figma - Vivid Cyan/Blue
		[104, 160, 99], // Node.js - Medium Green
		[51, 51, 51], // Express.js - Dark Gray
		[255, 136, 0], // Postman - Bright Orange
		[242, 101, 34], // Java - Logo Orange
		[0, 201, 167], //React Native - Bright Teal
		[255, 166, 17], // Firebase - Dark Tangerine
		[240, 81, 51], // Swift - Vivid Orange
		[36, 150, 237], // Docker - Blue
		[42, 197, 166], // FastAPI - Teal Green
		[0, 173, 216], // Go - Brand Blue
	]
  console.log("Colors length:", colors.length)

	const icons = [
    <FaHtml5 key='html' className='text-white text-xl' />,
		<FaCss3Alt key='css' className='text-white text-xl' />,
		<FaJs key='js' className='text-white text-xl' />,
		<SiTypescript key='ts' className='text-white text-xl' />,
		<RiTailwindCssFill key='TailwindCss' className='text-white text-xl' />,
		<FaReact key='react' className='text-white text-xl' />,
		<SiNextdotjs key='Next.js' className='text-white text-xl' />,
		<FaNodeJs key='Nodejs' className='text-white text-xl' />,
		<SiExpress key='Expressjs' className='text-white text-xl' size={35} />,
		<SiNestjs  key='Nestjs' className='text-white text-xl' size={35} />,
		<FaPython key='Python' className='text-white text-xl' size={35} />,
		<SiPytorch  key='PyTorch' className='text-white text-xl' size={35} />,
		<SiFlask key='Flask' className='text-white text-xl' size={35} />,
		<SiNumpy  key='Numpy' className='text-white text-xl' size={35} />,
		<SiPandas  key='Pandas' className='text-white text-xl' size={35} />,
		<SiScikitlearn  key='Scikitlearn' className='text-white text-xl' size={35} />,
		<SiJest   key='Jest' className='text-white text-xl' size={35} />,
		<FaDocker key='Docker' className='text-white text-xl' size={35} />,
		<SiPostman key='Postman' className='text-white text-xl' size={35} />,
		<SiFirebase key='Firebase' className='text-white text-xl' size={35} />,
		<BiLogoPostgresql key='Postgresql' className='text-white text-xl' size={35} />,
		<SiMongodb    key='Mongodb' className='text-white text-xl' size={35} />,
		<FaFigma key='Figma' className='text-white text-xl' />,
	]
  console.log("Icons length:", icons.length)

	const audioSources = [
		'/e6-piano.mp3',
		'/d6-piano.mp3',
		'/b6-piano.mp3',
		'/g6-piano.mp3',
		'/f6-piano.mp3',
		'/a6-piano.mp3',
		'/c6-piano.mp3',
		'/d6-piano.mp3',
		'/e6-piano.mp3',
		'/a6-piano.mp3',
		'/c6-piano.mp3',
		'/g6-piano.mp3',
		'/f6-piano.mp3',
		'/a6-piano.mp3',
		'/f6-piano.mp3',
		'/g6-piano.mp3',
		'/b6-piano.mp3',
		'/e6-piano.mp3',
		'/d6-piano.mp3',
		'/b6-piano.mp3',
		'/g6-piano.mp3',
		'/d6-piano.mp3',
		'/a6-piano.mp3',
	]
  console.log("Audio sources length:", audioSources.length)

	const audioRefs = useRef([])

	const handleMouseEnter = index => {
		const audio = new Audio(audioSources[index])
		audioRefs.current[index] = audio
		audio.play()
	}

	return (
		<div className='relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black'>
			{/* Background Grid */}
			<div
				className={cn(
					'absolute inset-0 z-0 pointer-events-none',
					'[background-size:20px_20px]',
					'[background-image:radial-gradient(#404040_1px,transparent_1px)]',
				)}
			/>

			{/* Radial Mask */}
			<div className='absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

			{/* Heading */}
			<h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6'>
				Tools in My Arsenal
			</h2>

			{/* Prompts */}
			<div className='z-20 mb-6 text-lg font-semibold text-center'>
				{/* Mobile: Tap Prompt */}
				<p className='block sm:hidden bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent'>
					Try tapping on the icons 🎵
				</p>

				{/* Desktop/Tablet: Hover Prompt */}
				<p className='hidden sm:block bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent'>
					Hover over the icons to hear a sound 🎵
				</p>
			</div>

			{/* Icon Cards */}
			<div className='relative z-20 flex justify-center gap-3 flex-wrap max-w-5xl w-full'>
				{icons.map((icon, index) => (
					<CardSpotlight
						key={index}
						className='h-18 w-18 rounded-full flex items-center justify-center bg-black'
						color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
						onMouseEnter={() => handleMouseEnter(index)}
						onClick={() => handleMouseEnter(index)}
					>
						<div className='relative z-20'>{icon}</div>
					</CardSpotlight>
				))}
			</div>
		</div>
	)
}

export default Skills
