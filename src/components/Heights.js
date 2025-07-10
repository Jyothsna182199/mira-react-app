import React from "react";

function Heights() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="Heights"
            src="http://172.17.1.28:3000/d/eed2b15rlrh1cd/device-status-vizag-heights?orgId=1&from=now-90d&to=now&timezone=browser&refresh=30s"
            //src="http://localhost:3000/d/eed2b15rlrh1cd/device-status-vizag-heights?orgId=1&from=now-30d&to=now&timezone=browser&refresh=30s"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      );
}

export default Heights;