module.exports = {
  siteTitle: 'Yifei Chen | Software Engineer Candidate',
  siteDescription:
    'Yifei Chen is a designer and programmer, who is passionate about design and build cool things in real life and on the internet.',
  siteKeywords:
    'Yifei Chen,hsyche45, software engineer, software development engineer, java, twitch, web developer, javascript, designer, architecture',
  siteUrl: 'https://github.com/hsyche45', // needs to be updated
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Yifei Chen',
  location: 'Jersey City, USA',
  email: 'hsyche45@gmail.com',
  github: 'https://github.com/hsyche45',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hsyche45',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yifeichen93/',
    },
    // {
    //   name: 'Codepen',
    //   url: '',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hsyche45/',
    },
    // {
    //   name: 'Twitter',
    //   url: '',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
