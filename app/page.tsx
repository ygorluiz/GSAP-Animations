'use client'

import { NextPage } from 'next'
import { framerData, gsapData, springData } from '@/app/data'
import { Container, Content } from '@/styles/styles'
import React from 'react'
import Cursor from '@/components/Cursor/Cursor'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from "@mui/material/Card";

const Home: NextPage = () => {
	return (
		<div id="animation" className="flex justify-center flex-col">
			<Cursor />
			<h1 className="mb-8 mt-8 w-full text-center text-4xl font-bold text-gray-800">
				Demo verschiedener Animationen und Scroll Effekte
			</h1>
			<div className="flex justify-center gap-5">
			<Card className="w-80 bg-white rounded-xl shadow-lg">
				<CardContent>
					<h2 className="text-lg font-bold text-gray-700">
						Framer Motion
					</h2>
					<hr />
					<div className="flex flex-col">
						{framerData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</div>
				</CardContent>
			</Card>
			<Card  className="w-80 bg-white rounded-xl shadow-lg">
				<CardContent>
					<h2 className="text-lg font-bold text-gray-700">
						React Spring
					</h2>
					<hr />
					<div className="flex flex-col">
						{springData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</div>
				</CardContent>
			</Card>
			<Card className="w-80 bg-white rounded-xl shadow-lg">
				<CardContent>
					<h2 className="text-lg font-bold text-gray-700 m-0">
						GSAP
					</h2>
					<hr />
					<div className="flex flex-col">
						{gsapData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</div>
				</CardContent>
			</Card>
			</div>
		</div>
	)
}

export default Home
