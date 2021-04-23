export const projectData = [
  /*
    FAWEGO Project
  */
  {
    name: 'fawego',
    description: 'An activity tracking mobile application. Built using React Native and the Geolocation API with Apple Maps.',
    techUsed: [
      'JavaScript',
      'React Native',
      'Geolocation API'
    ],
    images: [
      {
        description: 'fawego start screen',
        srcWebp: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.webp",
        srcJp2: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.jp2",
        fallback: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_start.jpeg",
      },
      {
        description: 'fawego tracking screen',
        srcWebp: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.webp",
        srcJp2: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.jp2",
        fallback: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_tracking.jpeg",
      },
      {
        description: 'fawego pause screen',
        srcWebp: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.webp",
        srcJp2: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.jp2",
        fallback: "https://zc-portfolio.s3-us-west-1.amazonaws.com/fawego_pause.jpeg",
      }
    ],
    video: undefined
  },
  /*
    ATC Project
  */
  {
    name: 'engineered outfitters',
    description: 'An interactive and responsive "add to cart" component using the microservice architecture and deployed using AWS EC2.',
    techUsed: [
      'JavaScript',
      'React',
      'webpack',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS S3',
      'AWS EC2',
    ],
    images: undefined,
    video: {
      source: "https://zc-portfolio.s3-us-west-1.amazonaws.com/atc_demo.mp4",
      type: 'video/mp4'
    }
  },
  /*
    Portfolio Project
  */
    {
      name: 'portfolio (this site)',
      description: 'A responsive single page portfolio website built from scratch and hosted using GitHub Pages.',
      techUsed: [
        'JavaScript',
        'React',
        'React Bootstrap',
        'styled components',
        'webpack',
        'Node.js',
        'Express.js',
        'AWS S3',
        'Github Pages',
      ],
      images: [
        {
          description: "portfolio thumbnail",
          srcWebp: "https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.webp",
          srcJp2: "https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.jp2",
          fallback: "https://zc-portfolio.s3-us-west-1.amazonaws.com/portfolio_thumbnail.jpeg"
        }
      ],
      video: undefined,
    }
];
