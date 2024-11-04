import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUpdateRecord } from "../store/recordSlise";

function FormUpdate({ disp, onSetDisp }) {
  const PopWindow = styled.div`
    display: ${(props) => props.disp};
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 1;
  `;

  const DivForm = styled.div`
    width: 500px;
    height: 500px;
    padding: 20px;
    background-color: #303030;
    border-radius: 18px;
  `;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const records = useSelector((state) => state.records.records);
  const record = records.find((x) => x.id === disp.id);
// Почему можно изменить только по 1 символу?
// Почему енльзя задать стартовые значения?
  const [dataVal, setDataVal] = useState({
    dateTime: "",
    nameTel: "",
    auto: "",
    typeWork: "",
    description: "",
  });

  const onEditRecord = () => {
    const updateRecord = { ...dataVal, id: disp.id };
    dispatch(fetchUpdateRecord(updateRecord));
    navigate("/records");
  };

  const onDataChange = (value, key) => {
    setDataVal({
      ...dataVal,
      [key]: value,
    });
    console.log(value);
  };

  return (
    <PopWindow disp={disp.dispVal}>
      <DivForm>
        <Form.Group className="mb-3 ">
          <Form.Text className="text-light">
            <b>Измените дату и время ремонта</b>
          </Form.Text>
          <Form.Control
            value={dataVal.dateTime}
            className="text-light bg-dark"
            type="text"
            placeholder="Дата\Время"
            onChange={(e) => onDataChange(e.target.value, "dateTime")}
          />
          <Form.Text className="text-light">
            <b>Измените Имя и телефон для связи</b>
          </Form.Text>
          <Form.Control
            value={dataVal.nameTel}
            className="text-light bg-dark"
            type="text"
            placeholder="Имя\Телефон"
            onChange={(e) => onDataChange(e.target.value, "nameTel")}
          />
          <Form.Text className="text-light">
            <b>Измените модель авто </b>
          </Form.Text>
          <Form.Control
            value={dataVal.auto}
            className="text-light bg-dark"
            type="text"
            placeholder="Марка авто"
            onChange={(e) => onDataChange(e.target.value, "auto")}
          />

          <Form.Text className="text-light bg-dark">
            <b>Измените вид работ</b>
          </Form.Text>
          <Form.Select
            value={dataVal.typeWork}
            onChange={(e) => onDataChange(e.target.value, "typeWork")}
            placeholder="Htvjyn"
            aria-label="Default select example"
          >
            <option> &#128736; Вид работ:</option>
            <option value="ТО">ТО</option>
            <option value="Диагностика">Диагностика</option>
            <option value="Ремонт">Ремонт</option>
          </Form.Select>

          <>
            <FloatingLabel controlId="floatingTextarea2" label="Добавьте детали ремонта">
              <Form.Control
                value={dataVal.description}
                className="text-light bg-dark"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => onDataChange(e.target.value, "description")}
              />
            </FloatingLabel>
          </>
        </Form.Group>
        <Button
          onClick={onEditRecord}
          className="btn me-2 bg-dark btn-success"
          variant=" primary"
          type="submit"
        >
          Добавить
        </Button>
        <Button
          className="btn  bg-dark btn-primary"
          variant=" primary"
          type="submit"
          onClick={onSetDisp}
        >
          Отменить
        </Button>
      </DivForm>
    </PopWindow>
  );
}

export default FormUpdate;
