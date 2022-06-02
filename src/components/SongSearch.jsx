import React, { useState, useEffect } from 'react';


//! importación de componentes
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
  const [search, setSearch] = useState(null)
  const [liryc, setLiryc] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(false)



  //*pendiente del uso del useEffect para traer la data
  return (
    <div>
      song search
      <SongForm />
      <SongDetails />
    </div>
  )
}

export default SongSearch