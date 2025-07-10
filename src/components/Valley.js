import React from "react";
//const grafanaBaseUrl = process.env.REACT_APP_GRAFANA_URL;

function Valley() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
          <iframe
            title="Valley"
            src="http://172.17.1.28:3000/d/bed23f16c90qoa/device-status-vizag-valley?orgId=1&from=now-90d&to=now&timezone=browser&refresh=5s"
           // src="http://localhost:3000/public-dashboards/6f632cdb967d4118b565872411cec52a"
             //src={`${grafanaBaseUrl}/d/bed23f16c90qoa/device-status-vizag-valley?orgId=1&from=now-90d&to=now&timezone=browser&refresh=30s`}   
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
       
        </div>
      );
}

export default Valley;

