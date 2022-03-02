import React from 'react'
import FooterMiddleItem from './FooterMiddleItem'

const FooterMiddle = () => {
    return (
        <div style={{ width: "250px", display: "flex", justifyContent: "space-between", marginLeft: "40px" }}>
            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                <FooterMiddleItem title="About" isabove={true} />
                <div style={{ marginTop: "50px" }}>
                    <FooterMiddleItem title="Profile" />
                    <FooterMiddleItem title="Features" />
                    <FooterMiddleItem title="Careers" />
                    <FooterMiddleItem title="DW News" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                <FooterMiddleItem title="Help" isabove={true} />
                <div style={{ marginTop: "50px" }}>
                    <FooterMiddleItem title="Support" />
                    <FooterMiddleItem title="Sign up" />
                    <FooterMiddleItem title="Guide" />
                    <FooterMiddleItem title="DW Reports" />
                    <FooterMiddleItem title="Q&A" />
                </div>
            </div>
        </div>

    )
}

export default FooterMiddle