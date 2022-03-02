import React from 'react'
import NavbarItem from './NavbarItem'
const Navbar = ({insignia}) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", width: '100%', alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", paddingLeft: "100px" }}>
                <img src={insignia} alt="Insignia" style={{ width: "60px", height: "60px" }} />
                <span style={{ color: "#30FBEF", fontWeight: "bold", fontSize: "26px", lineHeight: "42px", marginLeft: "5px" }}>Insignia</span>
            </div>
            <div style={{ display: "flex", paddingRight: "100px", justifyContent: "center", alignItems: "center" }}>
                <NavbarItem color="#30FBEF" name="About" />
                <NavbarItem color="white" name="Help" />
                <NavbarItem color="white" name="Features" />
                <NavbarItem color="white" name="Signup" />
                <div style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#30FBEF",
                    marginLeft: "40px",
                    marginRight: "8px",
                    letterSpacing: "0.005em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: '#282828',
                    boxShadow: '4px 3px 8px rgba(0, 0, 0, 0.25), -3px -3px 8px rgba(75, 93, 104, 0.1)',
                    borderRadius: '50px',
                    padding: "7px"
                }}>Reqest Demo <span style={{ color: "#9C69E2", fontSize: "25px", marginLeft: "7px" }}>&rarr;</span></div>
            </div>
        </nav>

    )
}

export default Navbar