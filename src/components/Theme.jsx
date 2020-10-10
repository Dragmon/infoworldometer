import React from 'react'
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components'

const theme ={
  colors:{
    black: '#454655',
    gray: '#A9AABC',
    white: '#F7F8FF',
    primary: '#323C6A',
    secondary: '#007D58',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes:{
    small: '1em',
    medium: '2em',
    large: '3em'
  },
}

const Theme = ({ children }) => (
<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node,
}

export default Theme;
