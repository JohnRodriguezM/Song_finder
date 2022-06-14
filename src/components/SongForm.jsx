import React, { useState, useEffect } from 'react';

const initialForm = {
  artist: '',
  song: '',
}
const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm)
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (!form.artist || !form.song) alert('agg texto ')
    handleSearch(form)
    setForm(initialForm)
  }
  return (
    <div>
      Search your song and artist
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">  Artist: </label> <br />
        <input type="text" name="artist" id="" onChange={handleChange} value = {form.artist}/> <br />
        <label htmlFor="song">  Song </label> <br />
        <input type="text" name="song" id="" onChange={handleChange} value = {form.song}/>
        <br />
        <input type="submit" value="enviar" />
        <input type="reset" value="" style = {{visibility: 'hidden'}}/>
      </form>

    </div>
  )
}

export default SongForm