import React from 'react'

const FooterSocialMediaItem = ({img}) => {
    return (
        <div style={{
            width: "80px", height: "80px", background: '#282828',
            boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)',
            borderRadius: '50px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img src={img} alt="" />
        </div>
    )
}

export default FooterSocialMediaItem