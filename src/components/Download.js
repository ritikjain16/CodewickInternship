import React from 'react'
const Download = ({img}) => {
    return (
        <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "240px", marginRight: "240px", marginTop: "70px",
            background: 'radial-gradient(38.2% 50% at 50% 50%, #2E3134 0%, #292B2E 100%)',
            border: '2px solid #272829',
            boxShadow: 'inset 2px 2px 40px rgba(0, 0, 0, 0.3)',
            borderRadius: '50px',
            padding: "50px",
            position: "relative"
        }}>
            <div style={{ marginLeft: "30px", width: "474px" }}>
                <span style={{ fontWeight: "bold", fontSize: "40px", lineHeight: "52px", color: "#30FBEF", }}>Download Our App</span>
                <div style={{ fontWeight: "normal", fontSize: "18px", lineHeight: "29px", color: "white", marginTop: "20px" }}>
                    The place to store various data that you can access at any time through the internet and where you can carry it. <br /> This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
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
                    marginTop: "35px"
                }}>Download</span>
            </div>
            <div>
                <img src={img} style={{ width: "700px", height: "731.96px", position: "absolute", left: "420px", top: "-100px" }} />
            </div>
        </div>
    )
}

export default Download