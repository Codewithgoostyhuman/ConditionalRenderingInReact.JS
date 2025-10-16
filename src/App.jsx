import { createContext, useContext, useState } from 'react'



function App() {
 const [Email,setEmail] = useState("");
 function handleSubmit(e){
  e.preventDefault();
  alert(`Form Submitted - Email: ${Email}`);
 }
  
return(
<div>
  <form onSubmit={handleSubmit}>
    <input type="email" value={Email} placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
    <button type='submit'>Submit</button>
  </form>

</div>
  
  

  
)

}

export default App
