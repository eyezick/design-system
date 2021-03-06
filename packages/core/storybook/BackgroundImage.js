import React from 'react'
import { storiesOf } from '@storybook/react'
import { optionsKnob, withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { Catch, LiveEditor, Markdown } from '@compositor/kit'
import { BackgroundImage, Box, Flex, Text } from '../src'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'
const parallaxImage =
  'https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg'

const variations = { static: 'static', parallax: 'parallax' }

storiesOf('BackgroundImage', module)
  .addParameters({ component: BackgroundImage })
  .addDecorator(story => (
    <Box>
      <Markdown>
        {`Use the <code>&lt;BackgroundImage /&gt;</code> component to render a background image. Use the *variation* prop to change the attachment mode of the background.`}
      </Markdown>
      {story()}
    </Box>
  ))
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      inline: false
    })
  )
  .add('Variations', () => {
    const variation = optionsKnob('Variation', variations, 'parallax', {
      display: 'select'
    })

    return (
      <Catch>
        <LiveEditor
          code={`
<BackgroundImage
  height="600px"
  width={1}
  variation='${variation}'
  image='${parallaxImage}'
/>
          `}
          scope={{ BackgroundImage }}
        />
      </Catch>
    )
  })
  .add('Fixed Height', () => (
    <Box>
      <BackgroundImage height="320px" image={image} width="360px">
        <Box p={4}>
          <Text fontSize={6} bold textAlign="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Box>
  ))
  .add('Responsive', () => (
    <Flex>
      <BackgroundImage
        width={['100px', '216px', '260px']}
        height="320px"
        image={image}
      >
        <Box p={4}>
          <Text fontSize={6} bold textAlign="center" color="white">
            Hello
          </Text>
        </Box>
      </BackgroundImage>
    </Flex>
  ))
