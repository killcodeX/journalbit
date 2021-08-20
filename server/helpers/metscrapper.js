// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])
const got = require('got')

export const getMetData = async (link) => {
  try{
    const { body: html, url } = await got(link)
  const metadata = await metascraper({ html, url })
  return metadata;
  } catch(error){
    console.log(error)
  }
}