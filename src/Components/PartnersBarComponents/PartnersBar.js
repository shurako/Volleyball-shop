import React from "react";
import "./PartnersBar.css";

function PartnersBar() {
  return (
    <div className = {'main-section'}>
        <div className = {'section-title'}>PARTNERZY</div>
      <div className={"partners-bar"}>
        <div className={"logo__wrapper"}>
          <img alt = {''} src={"partners logo/adidas.png"} />
        </div>
        <div className={"logo__wrapper"}>
          <img alt = {''} src={"partners logo/asics.png"} />
        </div>
        <div className={"logo__wrapper"}>
          <img alt = {''} src={"partners logo/mizuno.png"} />
        </div>
        <div className={"logo__wrapper"}>
          <img alt = {''} src={"partners logo/nike.png"} />
        </div>
        <div className={"logo__wrapper"}>
          <img alt = {''} src={"partners logo/underarmor.png"} />
        </div>
      </div>
    </div>
  );
}

export default PartnersBar;
