import metascraper from 'metascraper';
import got from 'got';

export const getMetData = async (link) => {
  const { body: html, url } = await got(link)
  const metadata = await metascraper({ html, url })
  console.log(metadata)
}