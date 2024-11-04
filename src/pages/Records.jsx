import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import { useEffect } from "react";
import { fetchRecords, fethDeleteRecord } from "../store/recordSlise";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import FormUpdate from "../components/FormUpdate";
const Records = () => {
  const records = useSelector((state) => state.records.records);
  const dispatch = useDispatch();
  const [disp, setDisp] = useState({
    dispVal: "none",
    id: "1",
  });

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  const onDelete = async (id) => {
    dispatch(fethDeleteRecord(id));
  };

  const onOpen = (id) => {
    if (disp.dispVal === "none") {
      setDisp({
        dispVal: "flex",
        id: id,
      });
      console.log(id + " flex");
    } else {
      setDisp({
        dispVal: "none",
        id: "1",
      });
      console.log(id + " none");
    }
  };

  

  return (
    <>
      <FormUpdate disp={disp} onSetDisp={onOpen}  />
      <div
        style={{
          overflowX: "scroll",
          overflow: "overlay",
          height: "85vh",
          scrollbarColor: "auto",
          borderRadius: "18px",
        }}
      >
        <Table className="rounded-3 table-dark">
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
            {records.map((rec) => (
              <tr>
                <th scope="row">{rec.id}</th>
                <td>{rec.dateTime}</td>
                <td>{rec.nameTel}</td>
                <td>{rec.auto}</td>
                <td>
                  <Accordion className="table-dark">
                    <Accordion.Item className="text-light bg-dark" eventKey="1">
                      <Accordion.Header className="text-light bg-dark">
                        <b>{rec.typeWork}</b>
                      </Accordion.Header>
                      <Accordion.Body className="text-light bg-dark">
                        {rec.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <Button
                  onClick={() => onOpen(rec.id)}
                  className="m-2"
                  variant="primary"
                >
                  &#9999;
                </Button>
                <Button
                  onClick={() => onDelete(rec.id)}
                  className="m-2"
                  variant="danger"
                >
                  ✖
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Records;
