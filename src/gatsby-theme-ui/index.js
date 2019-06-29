import { base } from '@theme-ui/presets'
import merge from 'deepmerge'

export default merge(base, {
  colors: {
    highlight: '#ffffd0',
  },
  sizes: {
    container: 768,
  },
  styles: {
    a: {
      color: 'primary',
    },
    inlineCode: {
      fontFamily: 'monospace',
    },
    blockquote: {
      p: 3,
      mx: 0,
      my: 4,
      bg: 'highlight',
    },
    h1: {
      fontSize: [ 5, 6 ],
      mt: 0,
    },
    table: {
      mb: 4,
    },
    th: {
      borderColor: 'muted',
    },
    td: {
      borderWidth: 1,
      borderColor: 'muted',
    },
  },
})
