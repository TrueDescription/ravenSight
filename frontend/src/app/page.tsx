import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"

 

// function Login() {
//   return (
//     <div className='outer-container'>
//       <div className='text-container'>
//         <h2>Welcome to ravenSight</h2>
//         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum.</h3>
//       </div>
//       <div className='login-container'>
//         <input/>
//         <br/>
//         <input/>
//         <div>
//           <input type='checkbox'/>
//           <label>Remember Me?</label>
//         </div>
//         <Button>Sign Up</Button>
//         <Button>Log In</Button>
//       </div>
//     </div>
    
//   );
// }

function Login() {
  return (
          <div className="wrapping_div">
              <div className="header__navbar">
                  <div className="header__logo">
                      <h1 className="header__logo-title">RavenSight</h1>
                      {/* <img src="https://www.freeiconspng.com/thumbs/raven-png/raven-png-photo-10.png" alt="RavenSight Icon" width="30" height="24" /> */}
                      <img src="https://raw.githubusercontent.com/TrueDescription/ravenSight/main/frontend/src/ravenSightLogo.png" alt="RavenSight Icon" width="30" height="24" />

                  </div>
                  <div className="header__nav-links">
                      <a href="/">Home</a>
                      <a href="#about">About</a>
                      <a href="#services">Services</a>
                      <a href="#contact">Contact</a>
                  </div>
              </div>
  
              <div className="main__container">
                  <div className="main__content">
                      <div className="main__left">
                          <h1 className="heading-primary">Welcome to RavenSight</h1>
                          <p className="paragraph-primary">Enjoy free trading, real-time information, and take control of your financial journey today.</p>
                      </div>
                      <Separator orientation="vertical" />
                      <div className="main__right">
                          <form method="post">
                              <div>
                                  <Input type="text" id="username" name="username" required placeholder="Username" />
                                  
                                  <label htmlFor="username">Username</label>
                              </div>
                              <div>
                                  <Input type="password" id="password" name="password" required placeholder="Password" />
                                  <label htmlFor="password">Password</label>
                              </div>
                              <div>
                                  <label>
                                      <input type="checkbox" value="remember-me" /> Remember me
                                  </label>
                              </div>
                              <Button variant="secondary" type="submit">Log in</Button>
                              <Button variant="secondary" type="submit">Sign up</Button>
                              <hr className="my-4" />
                              <small className="text-body-secondary">By clicking Log in, you agree to the terms of use.</small>
                          </form>
                      </div>
                  </div>
              </div>
  
              <hr className="my-4" />
  
              <footer>
                  <div>
                      <h5>Navigation</h5>
                      <ul>
                          <li><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                          <li><a href="#" className="nav-link p-0 text-muted">Login/Register</a></li>
                          <li><a href="#" className="nav-link p-0 text-muted">Portfolio</a></li>
                          <li><a href="#" className="nav-link p-0 text-muted">Watchlist's</a></li>
                          <li><a href="#" className="nav-link p-0 text-muted">Markets</a></li>
                          <li><a href="#" className="nav-link p-0 text-muted">Stock Screener</a></li>
                      </ul>
                  </div>
                  <div>
                      <h5>Investment Resources</h5>
                      <ul>
                          <li><a href="https://www.getsmarteraboutmoney.ca/calculators/compound-interest-calculator/" target="_blank">Compound Calculator</a></li>
                          <li><a href="https://www.investopedia.com/" target="_blank">Investopedia</a></li>
                          <li><a href="https://www.reddit.com/r/wallstreetbets/" target="_blank">r/wallstreetbets</a></li>
                      </ul>
                  </div>
                  <div>
                      <h5>About Me</h5>
                      <ul>
                          <li><a href="https://www.linkedin.com/in/masalhafaisal/" target="_blank">Linkedin</a></li>
                          <li><a href="#" target="_blank">Portfolio</a></li>
                      </ul>
                  </div>
              </footer>
          </div>
  );
}

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <Login/>
      {/* <SeparatorDemo/> */}
    </div>
  )
}

