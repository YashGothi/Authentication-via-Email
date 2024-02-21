import SideNav, {
    Toggle,
    NavItem,
    NavIcon, 
    NavText
} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

function MySideNav()
{
    const navigate = useNavigate();

    return <SideNav 
            onSelect={selected => {
                console.log(selected)
                navigate('/'+selected)
            }}
            className = 'mysidenav'
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon> <i className='fa fa-fw fa-home' style={{fontSize: "1.0em"}} /></NavIcon>
            <NavText className="a" style={{fontSize: "2.0em"}}> Home </NavText>    
        </NavItem>

        <NavItem eventKey="create">
            <NavIcon> <i className="fa-solid fa-list-check" style={{fontSize: "1.0em"}} /></NavIcon>
            <NavText className="b" style={{fontSize: "2.0em"}}> Create Task </NavText>    
        </NavItem>

    </SideNav.Nav>
</SideNav>

}

export default MySideNav;
