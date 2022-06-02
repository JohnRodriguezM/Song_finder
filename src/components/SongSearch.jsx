import React, { useState, useEffect } from 'react';


//! importación de componentes
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongLoader from './SongLoader';
const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = data => {
    console.log(data)
    setSearch(data)
    console.log(search)
  }

  //*pendiente del uso del useEffect para traer la data
  return (
    <div>
      song search
      <SongForm handleSearch={handleSearch}/>
      {loading ? <SongLoader /> : <SongDetails 
        search ={search}
        lyric = {lyric}
        bio = {bio}
      />}
    </div>
  )
}

export default SongSearch