import { getCurrentlyPlayingSong } from '../../lib/spotify'

export default async function currentlyPlaying(req, res) {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  try {
    const response = await getCurrentlyPlayingSong()
    const data = await response.json()
    return res.status(200).json({ data })
  } catch (e) {
    return res.status(500).json({ msg: 'Something went wrong.' })
  }
}
