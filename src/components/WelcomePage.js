import React from 'react'

const WelcomePage = () => {
  return (
    <div>
      welcome {JSON.parse(localStorage.getItem('user')).name}
    </div>
  )
}

export default WelcomePage
