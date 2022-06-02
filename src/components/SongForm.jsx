import React, { useState, useEffect } from 'react';


const SongForm = ({handleSearch}) => {

  const [form, setForm] = useState({})

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    })
  }


  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(form)
  }
  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <input type="text" name="song" id=""  onInput = {handleChange} />
        <input type="submit" value="enviar" />
      </form>

    </div>
  )
}

export default SongForm