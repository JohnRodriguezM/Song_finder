import React from 'react'

const Message = ({ msg, bgColor }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto',
    width: '80%',
    height: '40px',
    maxWidth: '380px',
    padding: '.4rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: bgColor,
    borderRadius: '5px'
  }


  return (
    <div
      style={styles}>
      <p>{msg}</p>
    </div>
  )
}

export default Message