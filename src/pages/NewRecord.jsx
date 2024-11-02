import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAddRecord } from "../store/recordSlise";

function NewRecord() {
  const [data, setData] = useState({
    dateTime: "",
    nameTel: "",
    auto: "",
    typeWork: "",
    description: "",
  });

  const onDataChange = (value, key) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddClick = () => {
    dispatch(fetchAddRecord(data));
    navigate("/records");
  };

  const onEndClick = () => {
    navigate("/");
  };

  return (
    <>
      <Form.Group className="mb-3 ">
        <Form.Text className="text-light">
          <b>Введите дату и время ремонта</b>
        </Form.Text>
        <Form.Control
          className="text-light bg-dark"
          type="text"
          placeholder="Дата\Время"
          onChange={(e) => onDataChange(e.target.value, "dateTime")}
        />
        <Form.Text className="text-light">
          <b>Введите Имя и телефон для связи</b>
        </Form.Text>
        <Form.Control
          className="text-light bg-dark"
          type="text"
          placeholder="Имя\Телефон"
          onChange={(e) => onDataChange(e.target.value, "nameTel")}
        />
        <Form.Text className="text-light">
          <b>Модель авто </b>
        </Form.Text>
        <Form.Control
          className="text-light bg-dark"
          type="text"
          placeholder="Марка авто"
          onChange={(e) => onDataChange(e.target.value, "auto")}
        />

        <Form.Text className="text-light bg-dark">
          <b>Вид необходимых работ</b>
        </Form.Text>
        <Form.Select
          onChange={(e) => onDataChange(e.target.value, "typeWork")}
          placeholder="Htvjyn"
          aria-label="Default select example"
        >
          <option> &#128736; Вид работ:</option>
          <option value="1">ТО</option>
          <option value="2">Диагностика</option>
          <option value="3">Ремонт</option>
        </Form.Select>

        <>
          <FloatingLabel controlId="floatingTextarea2" label="Детали ремонта">
            <Form.Control
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
        className="btn me-2 bg-dark btn-success"
        variant=" primary"
        type="submit"
        onClick={onAddClick}
      >
        Добавить
      </Button>
      <Button
        className="btn  bg-dark btn-primary"
        variant=" primary"
        type="submit"
        onClick={onEndClick}
      >
        Отменить
      </Button>
    </>
  );
}

export default NewRecord;
