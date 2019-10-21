const siteUrl = 'https://dmitripavlutin.com';

module.exports = {
  siteUrl, // ensure compatibility with plugins that require `siteUrl`
  siteInfo: {
    title: 'Dmitri Pavlutin',
    description: 'Thoughts on Frontend development',
    metaTitle: 'Dmitri Pavlutin Blog',
    metaDescription:
      'Dmitri Pavlutin Blog is a place to learn about JavaScript, CSS, React and more on Frontend development',
    url: siteUrl,
    repositoryUrl: 'https://github.com/panzerdp/dmitripavlutin.com',
  },
  authorInfo: {
    name: 'Dmitri Pavlutin',
    description:
      'Dmitri Pavlutin is a software developer and tech writer specialized in Frontend technologies. He likes to read books, run and travel the world.',
    email: 'dmitripavlutin@gmail.com',
    jobTitle: 'Software Developer',
    profiles: {
      stackoverflow: 'https://stackoverflow.com/users/1894471/dmitri-pavlutin',
      twitter: 'https://twitter.com/panzerdp',
      linkedin: 'https://www.linkedin.com/in/dmitri-pavlutin/',
      github: 'https://github.com/panzerdp',
      facebook: 'https://www.facebook.com/dmitri.pavlutin',
    },
    nicknames: {
      twitter: 'panzerdp',
    },
  },
  authorStats: {
    twitterFollowersCount: '1.2K',
  },
  emailSubscriptionService: {
    endpoint: 'https://dmitripavlutin.us13.list-manage.com/subscribe/post?u=7cedcb1f5ab74eb7c907e768e&id=75f44f92b9',
    hiddenFieldName: 'b_7cedcb1f5ab74eb7c907e768e_75f44f92b9',
  },
  featured: {
    popular: [
      'how-three-dots-changed-javascript',
      '7-tips-to-handle-undefined-in-javascript',
      '6-ways-to-declare-javascript-functions',
      '5-interesting-uses-javascript-destructuring',
      'simple-but-tricky-javascript-interview-questions',
    ],
  },
};
