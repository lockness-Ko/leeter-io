// import React from 'react'

import React from "react"

const NavBarItem = (props: any) => {
    return <li className="NavBar-item"><a className={props.Active ? "NavBar-active NavBar-link" : "NavBar-link"} href={props.Url}>{props.Text}</a></li>
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