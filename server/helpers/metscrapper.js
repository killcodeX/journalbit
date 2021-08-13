const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
  ])
  const got = require('got')
  
  const getMetData = async (link) => {
    const { body: html, url } = await got(link)
    const metadata = await metascraper({ html, url })
    console.log(metadata)
  }
  
  const targetUrl = 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'
  
  getMetData(targetUrl)