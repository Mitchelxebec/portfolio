import React from "react";

function Footer() {
    return (
        <>
            <div className="flex gap-2">
                <img src="../../src/assets/icons8-location-24.png" alt="location" />
                <small>Somewhere in the World</small>
            </div>
            <div className="flex gap-2">
                <img src="../../src/assets/icons8-email-24.png" alt="email" />
                <small>Mail me</small>
            </div>
            <div className="flex gap-2">
                <img src="../../src/assets/icons8-x-24.png" alt="x" />
                <small>X</small>
            </div>
        </>
    )
}
export default Footer;