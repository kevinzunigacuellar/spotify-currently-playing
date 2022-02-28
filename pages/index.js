import NotPlaying from '../components/NotPlaying'
import CurrentlyPlaying from '../components/CurrentlyPlaying'
import useSWR from 'swr'
import { getSong } from '../services/getSong'
import SpotifyPlaceholder from '../components/SpotifyPlaceHolder'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gray-100 flex items-center justify-center'>
      <Head>
        <title>Spotify currently playing</title>
        <link rel="icon" href="/spotify.svg" />
      </Head>
      <SpotifyPlayer />
    </div>
  )
}
  

function SpotifyPlayer(){
  const { data: song, error } = useSWR('/api/current_song', getSong)

  if (error) return <NotPlaying />
  if (!song) return <SpotifyPlaceholder />
  return <CurrentlyPlaying {...song} />
}

