import { NavLink } from "react-router-dom";


export function Navigation() {
  const styler = ({isActive = false } : { isActive : boolean }) => ({
    textDecoration: isActive ? 'none' : 'underline',
    color: isActive ? '#808080de': 'inherit',
    margin: '5px'
  })

 return (<>
  <NavLink to="/"
    style={styler}
  >
    Home
  </NavLink>
  |
  <NavLink to="channels" 
    style={styler}>
    Channels
  </NavLink>
  </>)
  
}