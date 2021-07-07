import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
	height: 336px;
	width: 264px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.flag {
		width: 100%;
		height: 50%;
	}
`;

const Text = styled.div`
	height: 50%;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	h1, p {
		margin-top: 0;
	}
	h1 {
		font-size: 22px;
	}
	span {
		font-weight: bold;
	}
`;

function Card({ country }) {
	let { flag, name, population, region, capital } = country
	return (
		<CardStyle>
			{/* <div className="flag" flag={flag} /> */}
			<img src={flag} alt="flag of the country" />
			<Text>
				<h1>{name}</h1>
				<p><span>Population:</span> {population}</p>
				<p><span>Region:</span> {region}</p>
				<p><span>Capital:</span> {capital}</p>
			</Text>
		</CardStyle>
	)
}

export default Card
