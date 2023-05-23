import React from "react";

const EnjoySection = () => {
  return (
    <section>
      <div class="container">
        <div class="section-wrap">
          <div class="section-content">
            <h1>Enjoy on your TV.</h1>
            <p>
              Eatch on smart TVs, PlayStation, Xbox, chromecast, Apple TV,
              Bluray players and more
            </p>
          </div>

          <div class="section-media">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            {/* <img src="" alt=""> */}

            <div class="video-div video-1">
              <video autoplay="" playsinline="" muted="" loop="">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
                {/* <source src="" type=> */}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoySection;
