import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    '--border-bottom': '1px solid',
    '--font-size': '14px'
  },
  large: {
    '--border-bottom': '2px solid',
    '--font-size': '18px'
  }
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size]
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <label htmlFor='input'>
        <StyledIcon id={icon} />
      </label>
      <StyledInput id='input' width={width} placeholder={placeholder} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  --color: ${COLORS.gray700};

  &:hover {
    --color: black;
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 0.3rem;
  color: var(--color);
`

const StyledInput = styled.input`
  appearance: none;
  border: none;
  border-bottom: var(--border-bottom);
  color: var(--color);
  font-size: var(--font-size);
  font-weight: 700;
  padding: 0 0 0.25rem 1.8rem;
  width: ${(props) => props.width}px;

  &:focus {
    outline-offset: 10px;
  }

  &::placeholder {
    font-weight: normal;
  }
`

export default IconInput
