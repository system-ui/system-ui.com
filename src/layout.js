/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import Navbar from './navbar.mdx'

export default props =>
  <Styled.root>
    <Navbar />
    <Box
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
      }}>
      {props.children}
    </Box>
  </Styled.root>
