import React from 'react';

import Message from './Message'
import { SongArtist } from './SongArtist'
import SongLyric from './SongLyric'


import '../css/SongDetails.css'

const SongDetails = ({ search, lyric, bio }) => {

  console.log(bio)
  if (!lyric || !bio) return null;
  return (

    <div className='containerSong'>
      { }

      {bio.artists ? <SongArtist character={bio.artists} nameArtist = {search.name}/> : <Message
        msg={`Error ${lyric.status} no se reconoce el artista ${search.artist}`}
        bgColor="#dc3545" />}


      {lyric.err ? <Message
        msg={`Error ${lyric.status} no existe la canción ${search.song}`}
        bgColor="#dc3545"
      /> : <SongLyric
        title={search.song}
        song={lyric} />}




      

    </div>
  )
}

export default SongDetails
