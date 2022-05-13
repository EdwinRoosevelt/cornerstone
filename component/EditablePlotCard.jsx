import React, {useState} from 'react'

function EditablePlotCard(props) {
  const {initialOwnerName, initialLocation, isPlotNew} = props;
  const [ownerName, setOwnerName] = useState("Edwin Roosevelt")
  const [cityName, setCityName] = useState("Vellore")
  const [cornerCoordinates, setCornerCoordinates] = useState([
    { lat: undefined, long: undefined },
  ]);

  function editCornerCoordinates(lat, long, curIndex) {
    const newCoord = {lat, long}
    setCornerCoordinates(
      cornerCoordinates
        .slice(0, curIndex)
        .concat(newCoord)
        .concat(cornerCoordinates.slice(curIndex+1, cornerCoordinates.length))
    );
  }

  function removeCornerCoordinate(index) {
    setCornerCoordinates(
      cornerCoordinates
        .slice(0, index)
        .concat(cornerCoordinates.slice(index + 1, cornerCoordinates.length))
    );
  }

  function createPlot() {
    const plot = {ownerName, cityName, cornerCoordinates}
    console.log(plot)
  }

  return (
    <div>
      <h1 className="my-5">REGISTER NEW PLOT</h1>
      <div className="card">
        <div className="card-header">NOTE</div>
        <div className="card-body">
          <p className="card-text">
            Plots will be sent for verification before added!
          </p>
        </div>
      </div>

      <div className="container mt-5 p-0">
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
                        className="form-control"
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
                        placeholder='e.g. Chennai'
                        className="form-control"
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
                      {cornerCoordinates.map((corner, index) => {
                        return (
                          <div className="input-group mb-3" key={index}>
                            <span className="input-group-text">Lat</span>
                            <input
                              type="number"
                              step="any"
                              placeholder="e.g. 12.397290"
                              className="form-control"
                              id="cornerLat"
                              value={corner.lat}
                              onChange={(target) =>
                                editCornerCoordinates(
                                  target.target.value,
                                  `${corner.long}`,
                                  index
                                )
                              }
                            />
                            <span className="input-group-text">Long</span>
                            <input
                              type="number"
                              step="any"
                              placeholder="e.g. 12.397290"
                              className="form-control"
                              value={corner.long}
                              onChange={(target) =>
                                editCornerCoordinates(
                                  `${corner.lat}`,
                                  target.target.value,
                                  index
                                )
                              }
                            />
                            {index === 0 && (
                              <button
                                className="btn btn-danger px-2 disabled"
                                onClick={() => removeCornerCoordinate(index)}
                              >
                                <i className="bi bi-trash3"></i>
                              </button>
                            )}
                            {index > 0 && (
                              <button
                                className="btn btn-danger px-2"
                                onClick={() => removeCornerCoordinate(index)}
                              >
                                <i className="bi bi-trash3"></i>
                              </button>
                            )}
                          </div>
                        );
                      })}

                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-success px-2"
                          onClick={() =>
                            setCornerCoordinates(
                              cornerCoordinates.concat({
                                lat: undefined,
                                long: undefined,
                              })
                            )
                          }
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <small className="opacity-50 text-nowrap">Corners</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success px-4 py-2 mt-5" onClick={createPlot}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default EditablePlotCard