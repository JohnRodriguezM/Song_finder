import React, { useState, useEffect } from 'react';


//! importación de componentes
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongLoader from './SongLoader';
import { helpHttp } from './../helpers/HelpHttp';
const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)


  let help = helpHttp()

  useEffect(() => {
    if (search === null) return;
    const getData = async (e) => {
      const { artist, song } = search;
      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)
      const [artistRes, songRes] = await Promise.all([
        help.get(artistUrl),
        help.get(songUrl)
      ])
      setBio(artistRes);
      setLyric(songRes);
      console.log(lyric);
      console.log(bio)
      setLoading(false)
    }
    getData()
  }, [search])



  const handleSearch = data => {
    console.log(data)
    setSearch(data)
  }

  //*pendiente del uso del useEffect para traer la data
  return (
    <div>
      song search
      <SongForm handleSearch={handleSearch} />
      {loading ? <SongLoader /> : <SongDetails
        search={search}
        lyric={lyric}
        bio={bio}
      />}
    </div>
  )
}

export default SongSearch