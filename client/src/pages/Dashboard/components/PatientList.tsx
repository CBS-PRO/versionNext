import { useNavigate } from "react-router-dom";
import React from "react";

const PatientList = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="container my-5">
        <div className="card-body text-center">
          <h4 className="card-title">Patient List</h4>
          <button
            id="add__new__list"
            type="button"
            className="btn btn-success position-absolute"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            onClick={() => navigate("/addpatient")}
          >
            <i className="fas fa-plus"></i> Add a new List
          </button>
        </div>
        <div className="card">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">List Name</th>
                <th scope="col">Sport</th>
                <th scope="col">Edit List </th>
                <th scope="col">list info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Ian</td>
                <td>Rugby</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Brendan</td>
                <td>Football</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Diachi</td>
                <td>Tennis</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bella</td>
                <td>Badminton</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Josh</td>
                <td>Rugby</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Abhi</td>
                <td>Football</td>
                <td>
                  <a className="btn btn-sm btn-primary" href="#">
                    <i className="far fa-edit"></i> edit
                  </a>
                  <a className="btn btn-sm btn-danger" href="#">
                    <i className="fas fa-trash-alt"></i> delete
                  </a>
                </td>
                <td>
                  <a className="btn btn-sm btn-info" href="#">
                    <i className="fas fa-info-circle"></i> Details
                  </a>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="modal fade bd-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="card-body text-center">
                <h4 className="card-title">Special title treatment</h4>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className=" card col-8 offset-2 my-2 p-3">
                <form>
                  <div className="form-group">
                    <label htmlFor="listname">List name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="listname"
                      id="listname"
                      placeholder="Enter your listname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker">Deadline</label>
                    <input
                      type="text"
                      className="form-control"
                      name="datepicker"
                      id="datepicker"
                      placeholder="Pick up a date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="datepicker">Add a list item</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add an item"
                        aria-label="Search for..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">
                          Go!
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-block btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PatientList;
