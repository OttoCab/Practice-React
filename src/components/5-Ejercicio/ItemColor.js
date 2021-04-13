import React from "react";

const square = {
  marginLeft: "5%",
  width: "70px",
  height: "70px",
  border: "3px solid black",
  background:
    "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
};

const ItemColor = (props) => {
  return (
    <div className="col-md-4 py-3">
      <div className="card shadow">
        <div className="card-header">
          <h5 className="card-title">{props.colorInd}</h5>
        </div>
        <div className="card-body">
          <div
            style={{
              margin: 'auto',
              width: "70px",
              height: "70px",
              border: "3px solid black",
              backgroundColor: props.colorInd,
            }}
          ></div>
          <div className="d-flex justify-content-end pt-3">
            <button
              className="btn btn-primary shadow w-50"
              onClick={() => props.borrarColor(props.colorI)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemColor;
