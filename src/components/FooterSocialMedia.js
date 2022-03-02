import React from 'react'
import FooterSocialMediaItem from './FooterSocialMediaItem'

const FooterSocialMedia = ({ fb, insta, twitter }) => {
    return (
        <div style={{ width: "300px", marginLeft: "40px" }}>
            <div style={{ color: "#30FBEF", fontWeight: "normal", fontSize: "16px", lineHeight: "26px", marginBottom: "8px", marginTop: "20px" }}>Social Media</div>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "50px" }}>
                <FooterSocialMediaItem img={fb} />
                <FooterSocialMediaItem img={twitter} />
                <FooterSocialMediaItem img={insta} />
            </div>
        </div>
    )
}

export default FooterSocialMedia