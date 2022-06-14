import React from 'react'

export const SongArtist = ({character}) => {
  return (
    <div>
    {
      character.map(el => {
        const {idArtist,strArtist,strCountry,strGender,strBiographyES} = el;
        return (
          <Lista key = {idArtist}>
          <li>{strArtist}</li>
          <li>{strCountry}</li>
          <li>{strGender}</li>
          <details>
            <summary>
              History
            </summary>
            <li>{strBiographyES}</li>
          </details>
          </Lista>
        )
      })
    }
    </div>
  )
}

const Lista = (props) => {
  let style = {
    textDecoration: 'none',
    listStyle: 'none',
  }
  return(
    <ul style = { style }>
        {props.children}
    </ul>
  )
}