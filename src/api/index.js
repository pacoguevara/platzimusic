import config from './config';

const apiKey = config.apiKey;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=_country&api_key=${apiKey}&format=json`

export default function getArtists(country){
  const url = URL.replace('_country', country)
  return fetch(url)
    .then(response => response.json())
    .then(json => json.topartists.artist)
}