import React from "react";

const square = {
    marginLeft: '5%',
    width: "70px",
    height: "70px",
    border: "3px solid black",
    background:
      "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
  };

const ItemColor = (props) => {
  return (
    <div className="col-sm-12 col-md-4 py-3">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{props.colorInd}</h5>
        </div>
        <div className="card-body">
          <div className="justify-content-center">
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "3px solid gray",
                backgroundColor: props.colorInd,
              }}
            ></div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary w-50"
                onClick={() => props.borrarColor(props.colorI)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemColor;
