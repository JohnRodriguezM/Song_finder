import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>SongDetails
      --
      <SongArtist />
      <SongLyric />
      --
    </div>
  )
}

export default SongDetails
