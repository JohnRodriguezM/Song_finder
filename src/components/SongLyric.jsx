import React from 'react'


import '../css/SongLyrics.css'

const SongLyric = ({ song, title }) => {
  return (
    <div className="container">
      <h1
        className="title">{title}</h1>
      <blockquote
        className="b_cuote"
       >{song.lyrics}</blockquote>
    </div>
  )
}

export default SongLyric