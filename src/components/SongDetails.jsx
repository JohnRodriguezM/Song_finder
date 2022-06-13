import React from 'react';

import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (

    <>
      { }
      Song Details
      {lyric.err ? <Message
        msg={`Error ${lyric.status} no existe la canción ${search.song}`}
        bgColor= "#dc354590"
      /> : <SongLyric />}



      {bio.artists ? <SongArtist /> : <Message
        msg={`Error ${lyric.status} no se reconoce el artista ${search.artist}`}
        bgColor="#dc354580" />}

    </>
  )
}

export default SongDetails
