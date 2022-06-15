import React from 'react'

import '../css/SongArtist.css'

export const SongArtist = ({character,nameArtist}) => {
  return (
    <div>
    {
      character.map(el => {
        const {idArtist,strArtist,strCountry,strArtistWideThumb,strBiographyES} = el;
        return (
          <Lista key = {idArtist}>
          {strArtistWideThumb && <li>
            <img src={strArtistWideThumb} alt="" width = "350"/>
          </li>}
          <li>{`El compositor de esta canción es: ${strArtist}`}</li>
          {strCountry && <li>{`Nació en: ${strCountry}`}</li>}
          {strBiographyES &&
            <details>
            <summary>
              Esta es la biografia del artista
            </summary>
            <blockquote className ="biography">{strBiographyES}</blockquote>
          </details>
          }
          </Lista>
        )
      })
    }
    </div>
  )
}

const Lista = (props) => {
  return(
    <ul className="ulContainer">
        {props.children}
    </ul>
  )
}