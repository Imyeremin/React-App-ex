import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function NewRecord() {
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
        />
        <Form.Text className="text-light">
          <b>Введите Имя и телефон для связи</b>
        </Form.Text>
        <Form.Control
          className="text-light bg-dark"
          type="text"
          placeholder="Имя\Телефон"
        />
        <Form.Text className="text-light">
          <b>Модель авто </b>
        </Form.Text>
        <Form.Control
          className="text-light bg-dark"
          type="text"
          placeholder="Марка авто"
        />

        <Form.Text className="text-light bg-dark">
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
              className="text-light bg-dark"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </>
      </Form.Group>
      <Button
        className="btn bg-dark btn-success"
        variant=" primary"
        type="submit"
      >
        Submit
      </Button>
    </>
  );
}

export default NewRecord;
