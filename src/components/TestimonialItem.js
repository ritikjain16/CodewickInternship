import React from 'react'

const TestimonialItem = ({ img, name, role, desc, color1, color2, i1, i2, i3, i4, i5 }) => {
    return (
        <div style={{
            width: "645px", height: "330px", background: '#212121',
            boxShadow: '9px 9px 10px rgba(0, 0, 0, 0.25), -9px -9px 10px rgba(75, 93, 104, 0.1)',
            borderRadius: '50px',
            display: "flex",
            justifyContent: "center", alignItems: "center",
            marginRight: "20px", marginLeft: "20px"
        }}>
            <div style={{ display: "flex", alignItems: "flex-start", height: "190px" }}>
                <img src={img} alt="" style={{ width: "90px", height: "90px" }} />
            </div>
            <div style={{ width: "385px", marginLeft: "20px" }}>
                <div style={{ fontWeight: "bold", fontSize: "22px", lineHeight: "35px", color: "#30FBEF", letterSpacing: "0.005em" }}>{name}</div>
                <div style={{ marginTop: "10px", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "250px" }}>
                    <div style={{ fontWeight: "normal", fontSize: "14px", lineHeight: "22px", color: "#30FBEF", letterSpacing: "0.01em", color: "#9C69E2" }}>{role}</div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <span style={{ width: "20px", height: "20px", background: i1 ? color1 : color2, borderRadius: "50%", marginLeft: "2px" }}></span>
                        <span style={{ width: "20px", height: "20px", background: i2 ? color1 : color2, borderRadius: "50%", marginLeft: "2px" }}></span>
                        <span style={{ width: "20px", height: "20px", background: i3 ? color1 : color2, borderRadius: "50%", marginLeft: "2px" }}></span>
                        <span style={{ width: "20px", height: "20px", background: i4 ? color1 : color2, borderRadius: "50%", marginLeft: "2px" }}></span>
                        <span style={{ width: "20px", height: "20px", background: i5 ? color1 : color2, borderRadius: "50%", marginLeft: "2px" }}></span>
                    </div>
                </div>
                <div style={{ fontWeight: "normal", fontSize: "18px", lineHeight: "32px", color: "white", letterSpacing: "0.01em" }}>{desc}</div>
            </div>
        </div>
    )
}

export default TestimonialItem