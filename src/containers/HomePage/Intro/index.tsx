import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "../../../components/SocialProfile/SocialProfile"
import { IntroWrapper, IntroImage, IntroTitle, Desciption } from "./style"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "#",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "#",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "#",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoGithub />,
    url: "#",
    tooltip: "Github",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { author, about } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroTitle>
        Hey! I’m <b>{author}</b>
      </IntroTitle>
      <Desciption>{about}</Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  )
}

export default Intro
