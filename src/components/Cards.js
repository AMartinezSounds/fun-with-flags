import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 50px;
	padding-top: 25px;
	padding-bottom: 25px;
	@media(min-width: 768px){
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
`;


function Cards({ countries }) {

	return (
		<CardsStyle>
			{countries.map(country => {
				return <Card country={country} />
			})}
		</CardsStyle>
	)
}

export default Cards
