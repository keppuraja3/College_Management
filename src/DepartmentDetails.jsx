import React from "react";

function DepartmentDetails() {
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th>S.No.</th>
            <th>Name of the Staff Members</th>
            <th>Qualification</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/Dr.-S.Shakila.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Dr.S.SHAKILA</font>
              </a>
            </td>
            <td>M.Sc.,M.Phil.,M.E.,Ph.D.,</td>
            <td>ASSISTANT PROFESSOR &amp; Head </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/T.GAYATHRI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ color: "#000" }}>Mrs. T.GAYATHRI</span>
              </a>
            </td>
            <td>M.Sc.,M.Phil.,</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/Dr.P.ARUL_.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Dr. P. ARUL</font>
              </a>
            </td>
            <td>M.Sc.,B.Ed.,MCA,M.Phil.,Ph.D.,</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/Dr.V.LALITHA.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Dr. V.LALITHA</font>
              </a>
            </td>
            <td>M.Sc.,MCA,M.Phil.,Ph.D., NET</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/S.KALVIKKARASI.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Mrs. S.KALVIKKARASI</font>
              </a>
            </td>
            <td>MCA.,M.Phil., NET</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2021/03/Dr.-P.Calduwel-Newton.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Dr. P. CALDUWEL NEWTON</font>
              </a>
            </td>
            <td>M.Sc., M.Phil.,Ph.D., SET</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <a
                href="https://gactrichy.ac.in/wp-content/uploads/2023/06/Staff__Profile_eVANJALINE.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font color="#000">Dr.D.J.Evanjaline</font>
              </a>
            </td>
            <td>MCA., MPhil., PhD</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
          <tr>
            <td colspan="4" style={{ textAlign: "center" }}>
              ANNAMALAI UNIVERSITY STAFF
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Ms.R.MANGAYARKARASI</td>
            <td>M.Sc.,M.Phil.,</td>
            <td>ASSISTANT PROFESSOR</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DepartmentDetails;
