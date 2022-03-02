import React from 'react'

const FeatureItem = ({ img, name, desc }) => {
    return (
        <div style={{
            width: "405px", height: "570px", background: '#212121',
            boxShadow: '9px 9px 10px rgba(0, 0, 0, 0.25), -9px -9px 10px rgba(75, 93, 104, 0.1)',
            borderRadius: '50px',
            display: "flex",
            justifyContent: "center", alignItems: "center",
            flexDirection: "column",
            marginRight: "20px", marginLeft: "20px"
        }}>
            <img src={img} alt="" style={{ width: "240px", height: "240px" }} />
            <div style={{ width: "330px" }}>
                <span style={{ fontWeight: "bold", fontSize: "24px", lineHeight: "31px", color: "#30FBEF", }}>{name}</span>
                <div style={{ fontWeight: "normal", fontSize: "16px", lineHeight: "26px", color: "white", marginTop: "20px" }}>
                    {desc}
                </div>
                <div style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "white",
                    letterSpacing: "0.005em",
                    marginTop: "35px",
                    color: "#30FBEF"
                }}>Learn More <span style={{ color: "#9C69E2", fontSize: "25px", marginLeft: "7px" }}>&rarr;</span></div>
            </div>
        </div>
    )
}

export default FeatureItem