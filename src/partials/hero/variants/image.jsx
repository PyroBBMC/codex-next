/*
Represents the background image used in the Hero section
which is also exported to be used in other variants
*/

import { ImageTemplate } from 'root/src/components/section-wrapper'
import heroImg from 'root/public/partials/hero/red_waves.jpg'

const Image = () => (
  <ImageTemplate
    {...{
      alt: 'Hero background',
      src: heroImg,
      brightness: '45%',
      placeholder: 'blur',
      priority: true,
    }}
  />
)

export default Image
