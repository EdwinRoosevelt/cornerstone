import React from "react";
// import "dotenv/config"

import PlotMap from "./PlotMap";

function PlotCard(props) {
  const {ownerName, cityName } = props.data
  return (
    <>
      <div className="container mt-5">
        <h1>#97841234</h1>
        {process.env.GAPI_KEY}
        <div className="container bg-light">
          <div className="row">
            <div className="col-md-5 p-3">
              <PlotMap />
            </div>

            <div className="col-md-7 p-3">
              <div className="list-group">
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <i
                    className="bi bi-person-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between ">
                    <div>
                      <p className="fs-5">{ownerName}</p>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>

                <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <p className="fs-5 mb-0">{cityName}</p>
                      <p className="opacity-50">Lat: 12.3546, Lon: 13.4567</p>
                    </div>
                    <small className="opacity-50 text-nowrap">now</small>
                  </div>
                </div>

                <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <i
                    className="bi bi-signpost-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <p className="mb-0 fs-5 mb-2">Corners</p>
                      <p className="opacity-50 mb-0">
                        Lat: 12.3546, Lon: 13.4567
                      </p>
                      <p className="opacity-50 mb-0">
                        Lat: 12.3546, Lon: 13.4567
                      </p>
                      <p className="opacity-50 mb-0">
                        Lat: 12.3546, Lon: 13.4567
                      </p>
                      <p className="opacity-50 mb-0">
                        Lat: 12.3546, Lon: 13.4567
                      </p>
                    </div>
                    <small className="opacity-50 text-nowrap">3d</small>
                  </div>
                </div>
              </div>

              {/* <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i
                    className="bi bi-person-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </span>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  placeholder="Owner Name"
                  aria-label="ownername"
                  aria-describedby="basic-addon1"
                  value="Edwin Roosevelt"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlotCard;
