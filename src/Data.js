import React, { useState } from "react";
import Interviews from "./Interviews.json";
import { FaArchive } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Data() {
  const [search, setSearch] = useState("");
  const [array, setArray] = useState(Interviews);
  const [display, setDisplay] = useState(false);

  const handleArchive = () => {
    setDisplay(!display);
    if (display === false) {
      setArray(array.filter((item) => item.archived === true));
    }
    if (display === true) {
      setArray(Interviews);
    }
  };

  return (
    <div>
      <div className="Nav">
        <img />
        <div style={{ marginTop: "0.9%" }}>
          <input
            className="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "0.9%", marginLeft: "80%" }}>
          <img
            className="profile-picture"
            src="https://www.filepicker.io/api/file/zpPP5saTlywu9rYeGd1g/convert?fit=crop&h=200&w=200"
            alt="nothing"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="heading">
          <h3>Interview Requests</h3>
          <p>There are 7 candidates in the list</p>
        </div>
        <div className="background">
          <label className="toggle">
            <div className="toggle-status">
              <div>
                <span className="toggle-button">
                  {display ? (
                    <span className="status1"> Show All</span>
                  ) : (
                    <span className="status">Show Archive</span>
                  )}
                </span>
              </div>
              <div>
                <span
                  className={display ? "right" : "left"}
                  onClick={(e) => handleArchive(e)}
                >
                  {display ? (
                    <AiFillMinusCircle
                      size="33px"
                      className="toggle-icons-minus"
                    />
                  ) : (
                    <AiFillPlusCircle
                      size="33px"
                      className="toggle-icons-plus"
                    />
                  )}
                </span>
              </div>
            </div>
          </label>
        </div>
      </div>
      {/* <div className="heading" >
        <h3>Interview Requests</h3>
        <p>There are 7 candidates in the list</p>
        
      </div> */}
      {/* <div className="background">
        <label className="toggle">
          <div className="toggle-status">
            <div>
              <span className="toggle-button">
                {display ? (
                  <span className="status1"> Show All</span>
                ) : (
                  <span className="status">Show Archive</span>
                )}
              </span>
            </div>
            <div>
              <span
                className={display ? "right" : "left"}
                onClick={(e) => handleArchive(e)}
              >
                {display ? (
                  <AiFillMinusCircle
                    size="33px"
                    className="toggle-icons-minus"
                  />
                ) : (
                  <AiFillPlusCircle size="33px" className="toggle-icons-plus" />
                )}
              </span>
            </div>
          </div>
        </label>
      </div> */}
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="table-head-background">
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Candidate
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Name
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Role
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Last Communication
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Salary
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Sent By
              </TableCell>
              <TableCell
                style={{ fontFamily: "Spartan", fontWeight: "bolder" }}
                align="right"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array
              .filter((name) => {
                if (search === "") {
                  return name;
                }
               else {
                  return name.candidate
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
              })
              .map((p, index) => {
                return (
                  <TableRow key={index}>
                    {/* <TableCell component="th" scope="row">  
                    {p.Id}  
                  </TableCell>   */}
                    <TableCell align="right">
                      <img
                        className="profile-picture"
                        src={p.image}
                        alt="nothing"
                      ></img>{" "}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Spartan" }} align="right">
                      {p.candidate}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Spartan" }} align="right">
                      {p.role}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Spartan" }} align="right">
                      {p.last_comms.description} {p.last_comms.date_time}
                    </TableCell>
                    <TableCell style={{ fontFamily: "Spartan" }} align="right">
                      <b>R {p.salary}</b>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Spartan" }} align="right">
                      {p.sent_by}
                    </TableCell>
                    <TableCell>
                      {p.archived ? (
                        <p className="archived">🔴 Archive</p>
                      ) : (
                        <p className="active">🟢 Active</p>
                      )}
                    </TableCell>
                    <TableCell style={{ paddingRight: "114px" }} align="right">
                      {p.archived ? <RiInboxUnarchiveFill /> : <FaArchive />}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div>
        <br />
        <tr>
          <th>Candidate</th>
          <th>Role</th>
          <th>Last Communication</th>
          <th>Salary</th>
          <th>Sent By</th>
        </tr>
        {array
          .filter((name) => {
            if (search === "") {
              return name;
            } else {
              return name.candidate
                .toLowerCase()
                .includes(search.toLowerCase());
            }
          })
          .map((items, id) => {
            return (
              <div key={id}>
                <br />
                <br />
                <tr>
                  <td>
                    {" "}
                    <img
                      className="profile-picture"
                      src={items.image}
                      alt="nothing"
                    />{" "}
                    {items.candidate}
                  </td>
                  <td>{items.role}</td>
                  <td>
                    {items.last_comms.description} {items.last_comms.date_time}
                  </td>
                  <td>{items.salary}</td>
                  <td>{items.sent_by}</td>
                  <td>
                    {items.archived ? <div>Archive</div> : <div>Active</div>}
                  </td>
                  <td>
                    {items.archived ? <RiInboxUnarchiveFill /> : <FaArchive />}
                  </td>
                </tr>
              </div>
            );
          })}
      </div> */}
    </div>
  );
}

export default Data;
