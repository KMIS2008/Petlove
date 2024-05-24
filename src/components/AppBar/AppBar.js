import { AuthNav } from "components/AuthNav/AuthNav";
import { Logo } from "components/Logo/Logo";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "redux/hook/useAuth";
import { Header } from "./AppBarstyled";
import { useLocation } from 'react-router-dom';


export function AppBar(){
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    const isHome = location.pathname === '/home';

    return(
        <Header $isHome={isHome}>
            <Logo/>
            {isLoggedIn ? <UserMenu/> : <AuthNav $isHome={isHome}/>}
          
        </Header>
    )
}