import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const hasNotification = false;
return(
<div>
  <h1>DashBoard</h1>
  {hasNotification && <p>You have a new notification</p>}
  {!hasNotification && <p>You dont have a new notification</p>}
  </div>

  
)

}

export default App
