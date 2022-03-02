import React from 'react'
import TryForFree from './TryForFree';
import FooterInsignia from './FooterInsignia';
import FooterMiddle from './FooterMiddle';
import FooterSocialMedia from './FooterSocialMedia';
const Footer = ({insignia,twitter,fb,insta,chat}) => {
    return (
        <>
            <div style={{ marginLeft: "240px", marginRight: "240px", marginTop: "70px" }}>
                <TryForFree />
            </div>

            <div style={{ marginLeft: "240px", marginRight: "240px", marginTop: "70px", display: "flex", justifyContent: "space-evenly" }}>
                <FooterInsignia img={insignia} />
                <FooterMiddle />
                <FooterSocialMedia fb={fb} twitter={twitter} insta={insta} />
            </div>
            <div style={{ marginLeft: "275px", marginRight: "285px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "200px", marginTop: "40px" }}>
                <div style={{ color: "#30FBEF", fontWeight: "normal", fontSize: "12px", lineHeight: "22px", letterSpacing: "0.01em" }}>  © Insignia™, 2020. All rights reserved.</div>
                <div style={{
                    width: "60px", height: "60px", background: '#282828',
                    boxShadow: '4px 3px 8px rgba(0, 0, 0, 0.25), -3px -3px 8px rgba(75, 93, 104, 0.1)',
                    borderRadius: '50px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={chat} alt="" style={{ width: "35px" }} />
                </div>
            </div>
        </>
    )
}

export default Footer