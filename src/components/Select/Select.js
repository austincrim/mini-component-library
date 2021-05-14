import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon id={'chevron-down'} size={24} strokeWidth={2} />
    </Wrapper>
  )
}

const Wrapper = styled.span`
  position: relative;
  --text-color: ${COLORS.gray700};

  &:hover {
    --text-color: black;
  }
`

const StyledSelect = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: var(--text-color);
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 0;
  color: var(--text-color);
`

export default Select
