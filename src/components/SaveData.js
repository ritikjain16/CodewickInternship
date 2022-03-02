import React from 'react'
const SaveData = ({img}) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "240px", marginRight: "240px", marginTop: "70px" }}>
            <div>
                <span style={{ fontWeight: "bold", fontSize: "80px", lineHeight: "88px", color: "#30FBEF", }}>Save your data storage here.</span>
                <div style={{ fontWeight: "normal", fontSize: "18px", lineHeight: "29px", color: "white", marginTop: "20px" }}>
                    Insignia is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </div>
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
                    width: "170px",
                    marginTop: "13px"
                }}>Learn More</span>
            </div>
            <div>
                <img src={img} style={{ width: "431px", height: "486px" }} />
            </div>
        </div>
    )
}

export default SaveData