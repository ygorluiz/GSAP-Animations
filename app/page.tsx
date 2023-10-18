'use client'

import { NextPage } from 'next'
import { framerData, gsapData, springData } from '@/app/data'
import { Container, Content, CustomCard, Link } from '@/styles/styles'
import React from 'react'
import Cursor from '@/components/Cursor/Cursor'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
	Card,
	CardBody,
} from "@material-tailwind/react";

const Home: NextPage = () => {
	return (
		<Container container id="animation" justifyContent="center">
			<Cursor />
			<h1 className="mb-8 mt-8 w-full text-center text-4xl font-bold text-gray-800">
				Demo verschiedener Animationen und Scroll Effekte
			</h1>
			<div className="flex justify-center gap-5">
			<Card className="w-80 bg-white p-5 rounded-xl shadow-lg">
				<CardBody>
					<Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
						Framer Motion
					</Typography>
					<hr />
					<Content container flexDirection="column">
						{framerData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</Content>
				</CardBody>
			</Card>
			<Card  className="w-80 bg-white p-3 rounded-xl shadow-lg">
				<CardBody>
					<Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
						React Spring
					</Typography>
					<hr />
					<Content container flexDirection="column">
						{springData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</Content>
				</CardBody>
			</Card>
			<Card className="w-80 bg-white p-3 rounded-xl shadow-lg">
				<CardBody>
					<Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
						GSAP
					</Typography>
					<hr />
					<Content container flexDirection="column">
						{gsapData.map((item, index) => (
							<a href={item.link} key={item.text} className="m-2 text-indigo-600">
								{index + 1}. {item.text}
							</a>
						))}
					</Content>
				</CardBody>
			</Card>
			</div>
		</Container>
	)
}

export default Home
