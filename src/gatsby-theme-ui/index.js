import { base } from '@theme-ui/presets'

export default {
  ...base,
  colors: {
    ...base.colors,
    highlight: '#ffffd0',
  },
  _fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
  },
  sizes: {
    container: 1024,
  },
  styles: {
    ...base.styles,
    a: {
      color: 'primary',
    },
    blockquote: {
      p: 3,
      mx: 0,
      my: 4,
      bg: 'highlight',
    },
  }
}
