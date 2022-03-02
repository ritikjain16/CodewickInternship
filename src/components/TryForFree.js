import React from 'react'

const TryForFree = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <div style={{ fontWeight: "bold", fontSize: "40px", lineHeight: "52px", color: "#30FBEF", }}>Try for free!</div>
                <div style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "29px", color: "white", marginTop: "10px" }}>Get limited 1 week free try our features!</div>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
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
                }}>Learn More</span>
                <span style={{
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "38px",
                    color: "#9C69E2",
                    letterSpacing: "0.005em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: '#282828',
                    boxShadow: '4px 3px 8px rgba(0, 0, 0, 0.25), -3px -3px 8px rgba(75, 93, 104, 0.1)',
                    borderRadius: '50px',
                    padding: "7px",
                    width: "220px",
                    marginLeft: "20px"
                }}>Reqest Demo <span style={{ color: "#9C69E2", fontSize: "25px", marginLeft: "7px" }}>&rarr;</span></span>
            </div>
        </div>
    )
}

export default TryForFree