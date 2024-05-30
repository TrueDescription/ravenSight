import Image from "next/image";

import { Button } from "@/components/ui/button"
 

function Login() {
  return (
    <div className='outer-container'>
      <div className='text-container'>
        <h2>Welcome to ravenSight</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum.</h3>
      </div>
      <div className='login-container'>
        <input/>
        <br/>
        <input/>
        <div>
          <input type='checkbox'/>
          <label>Remember Me?</label>
        </div>
        <Button>Sign Up</Button>
        <Button>Log In</Button>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <Login/>
    </div>
  )
}