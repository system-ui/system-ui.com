/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
      ...props.sx,
    }}
  />
