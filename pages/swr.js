import NotPlaying from '../components/NotPlaying'
import CurrentlyPlaying from '../components/CurrentlyPlaying'
import useSWR from 'swr'
import { getSong } from '../services/getSong'

export default function UsingSwr() {
  const { data, error } = useSWR('/api/current_song', getSong)

  if (error)
    return (
      <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
        <NotPlaying />
      </div>
    )
  if (!data) return <pre>loading...</pre>

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <CurrentlyPlaying
        songName={data.songName}
        artists={data.artists}
        imgUrl={data.img}
      />
    </div>
  )
}
