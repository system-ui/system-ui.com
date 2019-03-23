import React from 'react'

const rad = a => Math.PI * a / 180
const polygon = ({
  radius = 16,
  sides = 3,
  center = 16,
  angle = -90,
}) => {
  return Array.from({ length: sides })
    .map((n, i) => [
      center + radius * Math.cos(rad(angle) + i * (2 * Math.PI / sides)),
      center + radius * Math.sin(rad(angle) + i * (2 * Math.PI / sides)),
    ])
}

const toPath = points => points
  .reduce((path, [x, y], i) => {
    const cmd = i === 0 ? 'M' : 'L'
    path.push(cmd, x, y)
    if (i === points.length - 1) {
      const [ x1, y1 ] = points[0]
      path.push('L', x1, y1, 'z')
    }
    return path
  }, [])
  .join(' ')

const reverse = arr => [...arr].reverse()

const triangle = [
  toPath(polygon({ sides: 3, radius: 14 - 1/8 })),
  toPath(reverse(polygon({ sides: 3, radius: 10 }))),
].join(' ')

const hex = [
  toPath(polygon({ sides: 6, radius: 16, angle: 60 })),
  toPath(reverse(polygon({ sides: 6, radius: 14, angle: 60 }))),
].join(' ')

export default ({
  size = 128,
}) =>
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='currentcolor'
    style={{
      overflow: 'visible',
    }}>
    <path d={triangle} />
    <path d={hex} />
  </svg>

