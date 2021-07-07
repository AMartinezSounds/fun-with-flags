import React, { useRef } from 'react'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'

const InputStyle = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #dbdbdb;
	padding: 10px;
	border-radius: 50px;
	.searchInput {
		width: 100%;
		padding-left: 10px;
		font-size: 16px;
		border: none;
		background: transparent;
		&:focus, &:active {
		outline: none;
	}
	}
`;


function Searchbar({ country, searchKeyword }) {
	const inputEl = useRef("");
	const getSearchTerm = () => {
		searchKeyword(inputEl.current.value);
	};
	return (
		<InputStyle>
			<AiOutlineSearch style={{ color: '#d1d1d1' }} />
			<input className="searchInput" type="text" placeholder="Search..." value={country} onChange={getSearchTerm} ref={inputEl} />
		</InputStyle>
	)
}

export default Searchbar
