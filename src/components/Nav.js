import React from 'react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

const SearchbarStyle = styled.div`
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
	width: 70%;
	max-width: 600px;
`;

function Nav({ country, searchKeyword }) {
	return (
		<SearchbarStyle>
			<Searchbar country={country} searchKeyword={searchKeyword} />
		</SearchbarStyle>
	)
}

export default Nav;
