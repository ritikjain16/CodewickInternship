import React from 'react'

const NavbarItem = ({ color, name }) => {
    return (
        <span style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26px",
            color: color,
            marginLeft: "8px",
            marginRight: "8px"
        }}>{name}</span>
    )
}

export default NavbarItem