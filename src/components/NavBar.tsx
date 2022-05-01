import { NavLink } from "react-router-dom";

const NavBarItem = (props: any) => {
    return <li className="NavBar-item"><NavLink className={props.Active ? "NavBar-active NavBar-link" : "NavBar-link"} to={props.Url}>{props.Text}</NavLink></li>
}

export const NavBar = () => {
    return (
        <>
            <ul className="NavBar">
                <NavBarItem Url="/" Active={true} Text="leeter" />
                <NavBarItem Url="/pwn"Text="pwn" />
                <NavBarItem Url="/log" Text="login/signup" />
            </ul>
        </>
    )
}