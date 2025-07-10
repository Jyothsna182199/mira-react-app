import React from "react";

function VizagFacilities() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="VizagFacilities"
            //src="http://localhost:3000/d/deccztxwgasqof/vizag-facilities?orgId=1&from=now-30d&to=now&timezone=browser"
             src="http://172.17.1.28:3000/d/deccztxwgasqof/vizag-facilities?orgId=1&from=now-90d&to=now&timezone=browser"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      );
}

export default VizagFacilities;