import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	h1 {
		font-size: 25px;
		margin-left: auto;
		margin-right: auto;
	}
`;

function Header() {

	return (
		<HeaderStyle>
			<h1>Fun With Flags</h1>
		</HeaderStyle>
	)
}

export default Header
