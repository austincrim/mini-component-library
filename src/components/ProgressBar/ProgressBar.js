/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    '--border-radius': '4px',
    '--height': '8px'
  },
  medium: {
    '--border-radius': '4px',
    '--height': '12px'
  },
  large: {
    '--padding': '4px',
    '--border-radius': '8px',
    '--height': '16px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  return (
    <Wrapper
      aria-valuemin='0'
      aria-valuemax='100'
      aria-valuenow={value}
      style={styles}
    >
      <BarWrapper>
        <StyledProgress value={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </StyledProgress>
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
  overflow: hidden;
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: calc(var(--border-radius) / 2);
`

const StyledProgress = styled.div`
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${(props) => props.value}%;
`

export default ProgressBar
