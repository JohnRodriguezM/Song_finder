import React from 'react'

const SongLyric = ({song}) => {
  console.log(song)
  return (
    <div>{song.lyrics}</div>
  )
}

export default SongLyric