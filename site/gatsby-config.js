require("dotenv").config();

module.exports = {
  plugins: [
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: 'Petitgen Blog',
    //     short_name: 'Petitgen',
    //     start_url: '/',
    //     background_color: '#ffffff',
    //     theme_color: '#5a67d8',
    //     display: 'minimal-ui',
    //     icon: 'content/assets/favicon.png',
    //   },
    // },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        sources: {
          contentful: true,
          local: false,
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Petitgen Blog',
    name: 'Petitgen',
    description: 'Blog Petitgen - Sebastien MATHIEU',
    address: 'Christchurch, NZ',
    email: 'sebastien.mathieu.82@gmail.com',
    phone: '+64 21 070 4106',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/petitgen'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/petitgen'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/petitgen'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
