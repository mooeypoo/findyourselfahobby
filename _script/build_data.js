#!/usr/bin/node
import fetch from 'node-fetch';
import * as fs from 'fs'
import ProgressBar from 'progress';
import { Console } from 'console';

const hobbiesObject = {}
fs.readFile('./hobbies.md', 'utf8', async (err, data) => {
  console.log('Reading file...');

  data
    .match(/\[([a-zA-Z _'|0-9]+)?\]/g)
    .map(item => item.slice(1,-1))
    .forEach(item => {
      // Build the hobbies object
      const pieces = item.split('|')
      const normalizedKey = pieces[0].trim().replaceAll(' ', '_');
      // Initialize
      hobbiesObject[normalizedKey.toLowerCase()] = hobbiesObject[normalizedKey.toLowerCase()] || {}
      
      if (pieces.length) {
        if (pieces.length > 1 && pieces[1].length) { // The link has a distinct title
          hobbiesObject[normalizedKey.toLowerCase()] = {
            title: pieces[1].trim(),
            wikititle: normalizedKey
          }
        } else { // Use the title as the link
          hobbiesObject[normalizedKey.toLowerCase()] = {
            title: pieces[0].trim(),
            wikititle: normalizedKey
          }
        }
      }
    })

    const totalPages = Object.keys(hobbiesObject).length;
    const fetchProgress = new ProgressBar('-> Processing [:bar] :percent :current/:total :etas :wikititle', {
      total: totalPages,
      width: 50,
    });
    let counter = 0;
    console.log(`Attempting to fetch images from ${totalPages} pages`);

    // Go over the hobbies object to add images
    for (const key in hobbiesObject) {
      const title = hobbiesObject[key].wikititle.replaceAll(' ', '_');

      counter++;
      fetchProgress.tick({wikititle: hobbiesObject[key].wikititle});

      const urlParams = new URLSearchParams({
        action: 'query',
        prop: 'pageimages',
        redirects: 1,
        titles: title,
        pithumbsize: 300,
        format: 'json'
      })
      try {
        const response = await fetch(`https://en.wikipedia.org/w/api.php?${urlParams.toString()}`)
        const data = await response.json()
        const pages = data?.query?.pages;
        // console.log('\nChecking thumb for ', title)
        const thumb = pages && pages[Object.keys(pages)[0]]?.thumbnail;
        hobbiesObject[key].image = hobbiesObject[key].image || {};
        if (thumb) {
          // Add thumbnail
          hobbiesObject[key].image = thumb;
        }
      } catch (err) {
        console.error(`Error fetching image for ${title}`, err)
        
      }
    }

    // Write to file
    console.log('Saving to json file...')
    await storeData(hobbiesObject, './output/hobbies.json');
    console.log('Complete');
});

const storeData = async (data, path) => {
  try {
    await fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}
