import React from 'react'

const Subscribe = () => {
    return (
        <div style={{ marginLeft: "240px", marginRight: "240px", marginTop: "70px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <div style={{ fontWeight: "bold", fontSize: "40px", lineHeight: "52px", color: "#30FBEF", }}>Subscribe !</div>
                <div style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "29px", color: "white", marginTop: "10px" }}>Join our newsletter to never miss any latest news.</div>
            </div>
            <div style={{
                width: "610px", height: "84px", background: 'radial-gradient(38.2% 50% at 50% 50%, #2E3134 0%, #292B2E 100%)',
                border: '1px solid #272829',
                boxShadow: 'inset 2px 2px 25px rgba(0, 0, 0, 0.3)',
                borderRadius: '50px',
                display: "flex",
                alignItems: "center",
                paddingLeft: "30px"
            }}>
                <input type="text" placeholder='Enter your e-mail address here' style={{ width: "410px", fontWeight: "normal", fontSize: "18px", lineHeight: "29px", color: "white", background: "transparent", border: "0", outline: "0" }} />
                <span style={{
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "38px",
                    color: "white",
                    letterSpacing: "0.005em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: '#282828',
                    boxShadow: '4px 3px 8px rgba(0, 0, 0, 0.25), -3px -3px 8px rgba(75, 93, 104, 0.1)',
                    borderRadius: '50px',
                    padding: "7px",
                    width: "150px",
                }}>Join Us</span>
            </div>
        </div>
    )
}

export default Subscribe