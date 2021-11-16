const fromApitoResponseCurrentSong = apiResponse => {
  const {
    name: songName,
    artists: artistsData,
    album: { images },
    external_urls: { spotify: songUrl },
  } = apiResponse.data.item
  const imgUrl = images[2].url
  const artists = artistsData.map(artist => artist.name).join(', ')
  return { songName, artists, imgUrl, songUrl }
}

export const getSong = async url => {
  const data = await fetch(url)
    .then(res => res.json())
    .then(fromApitoResponseCurrentSong)
  return data
}
