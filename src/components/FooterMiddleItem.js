import React from 'react'

const FooterMiddleItem = ({ title, isabove }) => {
    return (
        <div style={{ color: "#30FBEF", fontWeight: "normal", fontSize: "16px", lineHeight: "26px", marginTop: isabove ? "20px" : "0px", marginBottom: !isabove ? "8px" : "0px" }}>{title}</div>
    )
}

export default FooterMiddleItem