import React, {useState} from 'react'

function EditablePlotCard(props) {
  const {initialOwnerName, initialLocation, isPlotNew} = props;
  const [ownerName, setOwnerName] = useState("Edwin Roosevelt")
  const [cityName, setCityName] = useState("Vellore")
  const [cornerLocations, setCornerLocations] = useState([])

  // function onChangeHandler() {

  // }

  return (
    <div>
      <p className="h5 text-center mt-5">
        Plots you add will be sent for verification before getting added!
      </p>
      <div className="container mt-5">
        <h1>id</h1>
        <div className="container bg-light">
          <div className="row">
            <div className="col-md-5 p-3">{/* <PlotMap /> */}</div>

            <div className="col-md-7 p-3">
              <div className="list-group">
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
                  <i
                    className="bi bi-person-fill"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <div className="d-flex gap-2 w-100 justify-content-between ">
                    <div>
                      {/* <p className="fs-5 mb-0">ownerName</p> */}
                      <input
                        type="text"
                        class="form-control"
                        id="ownerName"
                        value={ownerName}
                        onChange={(target) => setOwnerName(target.value)}
                      />
                      <p className="opacity-50">walletAddress</p>
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
                      <input
                        type="text"
                        class="form-control"
                        id="ownerName"
                        value={cityName}
                        onChange={(target) => setCityName(target.value)}
                      />
                      {/* <p className="fs-5 mb-0">cityName</p> */}
                      <p className="opacity-50">Lat:, Long:</p>
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
                      {/* {cornerCoordinates.map((corner) => {
                        return (
                          <p className="opacity-50 mb-0">
                            Lat: {corner.lat}, Lon: {corner.long}
                          </p>
                        );
                      })} */}
                      <div class="input-group">
                        <span class="input-group-text">Lat</span>
                        <input
                          type="text"
                          aria-label="First name"
                          class="form-control"
                        />
                        <span class="input-group-text">Long</span>
                        <input
                          type="text"
                          aria-label="Last name"
                          class="form-control"
                        />
                      </div>
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
        <button className="btn-primary px-4 py-2 m-3">Create</button>
      </div>
    </div>
  );
}

export default EditablePlotCard