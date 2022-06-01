import React, { useState, useEffect } from 'react';


//! importación de componentes
import SongDetails from './SongDetails';
import SongForm from './SongForm';

let url = 'http://localhost:5000/saludos'

const SongSearch = () => {
  const [search, setSearch] = useState(false)
  const [liryc, setLiryc] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (search) {
      getData(url)
      /*setSearch(false)*/
    }
    return () => {
      window.removeEventListener('load', getData)
    }
  }, [search])


  const getData = async urll => {
    try {
      const res = await fetch(urll)
      const data = await res.json()
      console.log(data)

    }
    catch (err) {
      console.error(err)
    }
  }
  //*pendiente del uso del useEffect para traer la data
  return (
    <div>
      song search
      <SongForm />
      <SongDetails />
      <button disabled = {search} onClick={() => {
        setSearch(true)
      }
      } >get datos</button>

    </div>
  )
}

export default SongSearch