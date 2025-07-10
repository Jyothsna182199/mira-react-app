import React from "react";

function Novi() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="Novi"
            src="http://172.17.1.28:3000/d/eecuw7haogutcb/device-status-novi?orgId=1&from=now-90d&to=now&timezone=browser&refresh=30s"
            //src="http://localhost:3000/d/eecuw7haogutcb/device-status-novi?orgId=1&from=now-30d&to=now&timezone=browser&refresh=1m&kiosk"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      );
}

export default Novi;