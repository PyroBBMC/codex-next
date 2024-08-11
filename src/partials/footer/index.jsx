/*
This is the footer section
*/

import { Col, Row } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import { css } from '@emotion/react'
import { darken } from 'polished'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single block component to display icon and content
const SingleBlock = (props) => {
  const { cols, Icon, content } = props
  return (
    <Col {...cols}>
      <div css={styled.SingleBlock}>
        {/* Icon to display */}
        <Icon className='_icon' />
        {/* Content to display */}
        <p className='_content'>{content}</p>
      </div>
    </Col>
  )
}

// Social icon component
const SocialIcon = (props) => {
  const { url, Icon, color } = props
  return (
    <a
      href={url}
      css={css`
        background-color: ${color};
        &:focus,
        &:hover {
          background-color: ${darken(0.08, color)};
        }
        ${styled.SocialIcon}
      `}
    >
      {/* Icon to display */}
      <Icon className='_icon' />
    </a>
  )
}

// Footer component
const Footer = (props) => (
  <SectionWrapper css={styled.Footer} {...props}>
    {/* List contact information blocks */}
    <Row className='_contact'>
      <SingleBlock
        Icon={icons.MapSharp}
        content={
          <a href='https://maps.app.goo.gl/fqsrEGo1uAGdd1ui7' target='_blank'>
            Atlanta, GA.
          </a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.CallSharp}
        content={<a href='tel:+441632967704'>404 456-9087</a>}
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.SendSharp}
        content={
          <a href='mailto:urbaninsightsolutions@gmail.com'>
            urbaninsightsolutions@gmail.com
          </a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
    </Row>
    {/* List social media icons and copyright notice */}
    <Row className='_row _mini'>
      <Col xs='12' lg='5' className='_socials'>
        {/* <SocialIcon url='#0' Icon={icons.LogoTwitter} color='#1DA1F2' /> */}
        {/* <SocialIcon url='#0' Icon={icons.LogoInstagram} color='#C32361' /> */}
        <SocialIcon
          url='https://www.linkedin.com/in/informationtechnologygloballeader/'
          Icon={icons.LogoLinkedin}
          color='#0077B5'
        />
        {/* <SocialIcon url='#0' Icon={icons.LogoYoutube} color='#c33a38' /> */}
        <SocialIcon
          url='https://github.com/PyroBBMC'
          Icon={icons.LogoGithub}
          color='#6e5494'
        />
        {/* <SocialIcon url='#0' Icon={icons.LogoFacebook} color='#3B5998' /> */}
      </Col>
      <Col as='p' xs='12' lg='7' className='_copyright-notice'>
        Copyright © 2024 UrbanInsight, all rights reserved. Developed by{' '}
        <a href='https://themeforest.net/user/exill' target='_blank'>
          UrbanInsight Solutions
        </a>
        .
      </Col>
    </Row>
  </SectionWrapper>
)

export default Footer
