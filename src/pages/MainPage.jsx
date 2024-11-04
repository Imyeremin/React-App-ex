import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const MainPage = () => {

  return (
    <>
      <h1 className="display-3 mt-5">
        <b>
          Приложение для создания, редактирования и удаления
          <br /> записей на автосервис.
        </b>
      </h1>
      <Button as={Link} to="/records" className="p-3 mt-4" variant="danger">
        Посмотреть записи
      </Button>
    </>
  );
};

export default MainPage;
