import React from 'react';

import Message from './Message'
import {SongArtist} from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({ search, lyric, bio }) => {
  console.log(bio)
  if (!lyric || !bio) return null;
  return (

    <>
      { }
      Song Details
      {lyric.err ? <Message
        msg={`Error ${lyric.status} no existe la canción ${search.song}`}
        bgColor= "#dc3545"
      /> : <SongLyric song = {lyric}/>}




      {bio.artists ? <SongArtist character = {bio.artists}/> : <Message
        msg={`Error ${lyric.status} no se reconoce el artista ${search.artist}`}
        bgColor="#dc3545" />}

    </>
  )
}

export default SongDetails
