/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import Head from './head'
import Navbar from './navbar.mdx'
import Container from './container'

export default props =>
  <Styled.root>
    <Head {...props} />
    <Navbar />
    {props.fullwidth ? props.children : (
      <Container>
        {props.children}
      </Container>
    )}
  </Styled.root>
