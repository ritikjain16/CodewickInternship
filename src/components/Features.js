import React from 'react'
import FeatureItem from './FeatureItem'
const Features = ({Clipboard,Printer,Shield}) => {
    return (
        <div style={{
            display: "flex", justifyContent: "space-between", marginLeft: "240px", marginRight: "240px", marginTop: "70px", flexDirection: "column",
            background: 'radial-gradient(38.2% 50% at 50% 50%, #2E3134 0%, #292B2E 100%)',
            border: '2px solid #272829',
            boxShadow: 'inset 2px 2px 40px rgba(0, 0, 0, 0.3)',
            borderRadius: '50px',
            padding: "50px",
        }}>
            <span style={{ fontWeight: "bold", fontSize: "24px", lineHeight: "31px", color: "#30FBEF" }}>Features</span>
            <div style={{ marginTop: "30px", display: "flex", alignItems: "center", width: "1700px" }}>
                <FeatureItem img={Clipboard} name="Search Data" desc="Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time." />

                <FeatureItem img={Printer} name="Print Out" desc="Print out service gives you convenience if someday you need print data, just edit it all and just print it." />

                <FeatureItem img={Shield} name="Security Code" desc="Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file." />

            </div>

            <div style={{ marginTop: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "40px", alignItems: "center" }}>
                    <span style={{ width: "10px", height: "10px", background: "#F063B8", borderRadius: "50%" }}></span>
                    <span style={{ width: "5px", height: "5px", background: "white", borderRadius: "50%" }}></span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <span style={{ fontSize: "35px", color: "white" }}>&larr;</span>
                    <span style={{ fontSize: "20px", color: "white", marginLeft: "10px" }}>&rarr;</span>
                </div>
            </div>

        </div>
    )
}

export default Features