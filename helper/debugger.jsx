'use client'

export const Debugger = ({ states }) => {
  return (
    <div style={{
      position: 'fixed',
      zIndex: '10',
      bottom: '2rem',
      left: '2rem',
      border: '1px solid orange',
      minWidth: '150px',
      maxWidth: '300px',
      backgroundColor: '#000',
      opacity: '0.5',
      borderRadius: '1rem',
      padding: '0 5px'
    }}
    >
      {Object.keys(states).map((key) => (
        <p key={key}>
          {key}: {states[key]}
        </p>
      ))}
    </div>
  )
}
