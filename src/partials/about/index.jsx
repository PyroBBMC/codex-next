/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/headshot.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'About me', description: 'Get to know me' }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={aboutImg}
        />
      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='12' lg='7'>
        {/* Information part */}
        <h2 className='_subtitle'>Who am i?</h2>

        <h2 className='_title'>Toriano Triche</h2>

        <div className='_description'>
          <p>
            Driven, accomplished, and experienced professional with 10+ years of
            solving diverse scope problems where data analysis requires
            strategic evaluation while demonstrating sound judgment in selecting
            methods for obtaining profitable solutions. Strong analytical and
            technical aptitude with the innate ability to prioritize multiple
            time-sensitive assignments simultaneously in a multi-facet
            environment providing operational support, improving efficiency,
            reducing risk, and reinforcing compliance.
          </p>
        </div>

        <address className='_address'>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Name:</span>
              <p>Toriano Triche</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>Email:</span>
              <p>
                <a href='torianotriche@gmail.com'>torianotriche@gmail.com</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Education:</span>
              <p>MBA</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>Location:</span>
              <p>Atlanta, GA</p>
            </Col>
          </Row>
        </address>

        {/* Buttons part */}
        <Button
          className='_button'
          href='/partials/about/tt_resume2024.pdf'
          download
        >
          Download CV
        </Button>

        <Button
          as={ScrollLink}
          to={'contact'}
          spy={true}
          smooth={true}
          duration={600}
          className='_button'
          variant='light'
        >
          Contact
        </Button>
      </Col>
    </div>
  </SectionWrapper>
)

export default About
