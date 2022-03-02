import React from 'react'

const FooterInsignia = ({img}) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "200px", }}>
                <img src={img} alt="Insignia" style={{ width: "60px", height: "60px" }} />
                <span style={{ color: "#30FBEF", fontWeight: "bold", fontSize: "26px", lineHeight: "42px", marginLeft: "5px" }}>Insignia</span>
            </div>
            <div style={{ color: "#30FBEF", fontWeight: "normal", fontSize: "16px", lineHeight: "29px", marginTop: "40px" }}>Insignia Society, 234 <br /> Bahagia Ave Street PRBW 29281</div>
            <div style={{ color: "#30FBEF", fontWeight: "normal", fontSize: "16px", lineHeight: "29px", marginTop: "40px" }}> info@insignia.com <br /> 1-232-3434 (Main)</div>
        </div>
    )
}

export default FooterInsignia