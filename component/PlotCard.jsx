import React from "react";
// import "dotenv/config"

import PlotMap from "./PlotMap";

function PlotCard(props) {
  const { id, ownerName, walletAddress, cityName, median, cornerCoordinates } = props.data;
  return (
    <>
      <div className="container mt-5">
        <h1>#{id}</h1>
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
                      <p className="fs-5 mb-0">{ownerName}</p>
                      <p className="opacity-50">
                        {walletAddress}
                      </p>
                    </div>
                    <small className="opacity-50 text-nowrap">Plot Owner</small>
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
                      <p className="opacity-50">
                        Lat: {median.lat}, Long: {median.long}
                      </p>
                    </div>
                    <small className="opacity-50 text-nowrap">Location</small>
                  </div>
                </div>

                <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <i
                    className="bi bi-signpost-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      {/* <p className="mb-0 fs-5 mb-2">Corners</p> */}
                      {cornerCoordinates.map((corner) => {
                        return (
                          <p className="opacity-50 mb-0">
                            Lat: {corner.lat}, Lon: {corner.long}
                          </p>
                        );
                      })}
                    </div>
                    <small className="opacity-50 text-nowrap">Corners</small>
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
