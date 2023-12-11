
import { Link, Outlet } from 'react-router-dom'
import './styles/index.sass'

const App = () => {
    return (
        <div className="app">
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>

            {/* SHOW FROM  ELEMENT */}
            <Outlet /> 
            
        </div> 
    )
}

export default App