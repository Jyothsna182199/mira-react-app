import React from "react";

function Atlanta() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="Atlanta"
            src="http://172.17.1.28:3000/d/ce786h6rx0a2oa/device-status-atlanta?orgId=1&from=now-90d&to=now&timezone=browser&refresh=10s"
            //src="http://localhost:3000/d/ce786h6rx0a2oa/device-status-atlanta?orgId=1&from=now-30d&to=now&timezone=browser&refresh=10s"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      );
}

export default Atlanta;