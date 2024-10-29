import React from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const Records = () => {
  return (
    <>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Дата\Время</th>
            <th scope="col">Имя\Телефон</th>
            <th scope="col">Марка авто</th>
            <th scope="col">Вид работ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Accordion className="table-dark">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-light bg-dark">
                    <b>TO</b>
                  </Accordion.Header>
                  <Accordion.Body className="text-light bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
            <Button className="m-2" variant="primary">&#9999;</Button>
              <Button className="m-2" variant="danger">✖</Button>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              {" "}
              <Accordion className="table-dark">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-light bg-dark">
                    <b>Ремонт</b>
                  </Accordion.Header>
                  <Accordion.Body className="text-light bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
            <Button className="m-2" variant="primary">&#9999;</Button>
            <Button className="m-2" variant="danger">✖</Button>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>@twitter</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>
              {" "}
              <Accordion className="text-light bg-dark">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="text-light bg-dark">
                    <b>Диагностика</b>
                  </Accordion.Header>
                  <Accordion.Body className="text-light bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
          
              <Button className="m-2" variant="primary">&#9999;</Button>
              <Button className="m-2" variant="danger">✖</Button>
          
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Records;
