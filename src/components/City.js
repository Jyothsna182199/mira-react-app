import React from "react";

function City() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="City"
            src="http://172.17.1.28:3000/d/bed1pfzckrda8e/device-status-vizag-city?orgId=1&from=now-90d&to=now&timezone=browser&refresh=5s"
            //src="http://localhost:3000/d/bed1pfzckrda8e/device-status-vizag-city?orgId=1&from=now-30d&to=now&timezone=browser&refresh=30s"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      );
}

export default City;