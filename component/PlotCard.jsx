import React from "react";

import PlotMap from "./PlotMap";

function PlotCard() {
  return (
    <>
      <div className="container mt-5">
        <h1>#12341234</h1>
        <div className="container bg-light p-2">
          <div class="row">
            <div class="col-md-5">
              <PlotMap/>
            </div>

            <div class="col-md-7 p-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i
                    class="bi bi-person-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </span>
                <input
                  type="text"
                  readOnly
                  class="form-control"
                  placeholder="Owner Name"
                  aria-label="ownername"
                  aria-describedby="basic-addon1"
                  value="Edwin Roosevelt"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i
                    class="bi bi-geo-alt-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </span>
                <input
                  type="text"
                  readOnly
                  class="form-control"
                  placeholder="City name"
                  aria-label="cityname"
                  aria-describedby="basic-addon1"
                  value="Vellore, India"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlotCard;
