import React from 'react'
import TestimonialItem from './TestimonialItem'
const Testimonials = ({p1,p2}) => {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", marginLeft: "240px", marginRight: "240px", marginTop: "170px", flexDirection: "column",
      background: 'radial-gradient(38.2% 50% at 50% 50%, #2E3134 0%, #292B2E 100%)',
      border: '2px solid #272829',
      boxShadow: 'inset 2px 2px 40px rgba(0, 0, 0, 0.3)',
      borderRadius: '50px',
      padding: "50px",
    }}>
      <span style={{ fontWeight: "bold", fontSize: "24px", lineHeight: "31px", color: "#30FBEF" }}>Testimonials</span>
      <div style={{ marginTop: "30px", display: "flex", alignItems: "center", width: "1700px" }}>

        <TestimonialItem img={p1} name="John Fang" role="Web Designer" desc="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." color1="#30FBEF" color2="#282828" i1={true} i2={true} i3={true} i4={true} i5={false} />

        <TestimonialItem img={p2} name="Jenny Doe" role="Web Designer" desc="Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla." color1="#30FBEF" color2="#282828" i1={true} i2={true} i3={true} i4={true} i5={true} />
      </div>

      <div style={{ marginTop: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "80px", alignItems: "center" }}>
          <span style={{ width: "10px", height: "10px", background: "#F063B8", borderRadius: "50%" }}></span>
          <span style={{ width: "5px", height: "5px", background: "white", borderRadius: "50%" }}></span>
          <span style={{ width: "5px", height: "5px", background: "white", borderRadius: "50%" }}></span>
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

export default Testimonials