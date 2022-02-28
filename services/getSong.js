const fromApitoResponseCurrentSong = apiResponse => {
  if (apiResponse.data.currently_playing_type !== 'track') { return res.status(200).json({ isPlaying: false }); }
  const {
    name: songName,
    artists: artistsData,
    album: { images },
    external_urls: { spotify: songUrl },
  } = apiResponse.data.item
  const imgUrl = images[1].url
  const artists = artistsData.map(artist => artist.name).join(', ')
  return { songName, artists, imgUrl, songUrl }
}

export const getSong = async url => {
  const data = await fetch(url)
    .then(res => res.json())
    .then(fromApitoResponseCurrentSong)
  return data
}
