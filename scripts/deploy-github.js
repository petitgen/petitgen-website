const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/petitgen/petitgen.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
