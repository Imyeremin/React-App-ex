import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import styled from "styled-components";

function FormUpdate({ disp }) {
  const PopWindow = styled.div`
    display: none;
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

  return (
    <PopWindow>
      <DivForm>
        <Form.Group className="mb-3 ">
          <Form.Text className="text-light">
            <b>Введите дату и время ремонта</b>
          </Form.Text>
          <Form.Control
            className=" bg-ligth"
            type="text"
            placeholder="Дата\Время"
          />
          <Form.Text className="text-light">
            <b>Введите Имя и телефон для связи</b>
          </Form.Text>
          <Form.Control
            className=" bg-ligth"
            type="text"
            placeholder="Имя\Телефон"
          />
          <Form.Text className="text-light">
            <b>Модель авто </b>
          </Form.Text>
          <Form.Control
            className=" bg-ligth"
            type="text"
            placeholder="Марка авто"
          />

          <Form.Text className=" bg-ligth">
            <b>Вид необходимых работ</b>
          </Form.Text>
          <Form.Select placeholder="Htvjyn" aria-label="Default select example">
            <option> &#128736; Вид работ:</option>
            <option value="1">ТО</option>
            <option value="2">Диагностика</option>
            <option value="3">Ремонт</option>
          </Form.Select>

          <>
            <FloatingLabel controlId="floatingTextarea2" label="Детали ремонта">
              <Form.Control
                className=" bg-ligth"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </>
        </Form.Group>
        <Button
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
        >
          Отменить
        </Button>
      </DivForm>
    </PopWindow>
  );
}

export default FormUpdate;
