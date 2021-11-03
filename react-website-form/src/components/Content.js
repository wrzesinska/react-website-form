import React from "react";
import "./Content.css";

export default function Content({ topLine, headLine, description }) {
  return (
    <div style={{ flex: "1 0 auto" }}>
      <div className='home__hero-section darkBg'>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{ display: "flex", flexDirection: "start" }}>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className='lighText'>{headLine}</h1>
                <p className='home__hero-subtitle'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
