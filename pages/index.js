import NotPlaying from '../components/NotPlaying'
import CurrentlyPlaying from '../components/CurrentlyPlaying'
import useSWR from 'swr'
import { getSong } from '../services/getSong'
import SpotifyPlaceholder from '../components/SpotifyPlaceHolder'

export default function UsingSwr() {
  const { data: song, error } = useSWR('/api/current_song', getSong)

  if (error)
    return (
      <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
        <NotPlaying />
      </div>
    )
  if (!song)
    return (
      <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
        <SpotifyPlaceholder />
      </div>
    )

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <CurrentlyPlaying {...song} />
    </div>
  )
}
