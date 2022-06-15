import React, { useState, useEffect } from 'react';

const initialForm = {
  artist: '',
  song: '',
}
const SongForm = ({ handleSearch }) => {

  let stylesInput = {
    maxWidth: '320px',
  }

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
      <h1>I 🧡 music</h1> <br />

      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="artist">  Artist: </label>
        <input style={stylesInput} className="input is-rounded" type="text" name="artist" id="" onChange={handleChange} value={form.artist} /> <br />
        <label className="label" htmlFor="song">  Song: </label>
        <input style={stylesInput} className="input is-rounded" type="text" name="song" id="" onChange={handleChange} value={form.song} />
        <br /> <br />
        <input className="button is-info" type="submit" value="Buscar" />
      </form>
      <br />
    </div>
  )
}

export default SongForm