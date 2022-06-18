import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const Btn = styled.button`
font-size: 1rem;
margin:1rem;
width:150px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background:palevioletred;
  color: #fff;
  cursor: pointer;
  background: ${({ disabled }) => (disabled ? 'palevioletred' : '#2ECCFA')};
`

const Button = ({ title, disabled, handleClick }) => {
  return <Btn disabled={disabled} onClick={handleClick} > {title} </Btn>
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
}

export default Button
