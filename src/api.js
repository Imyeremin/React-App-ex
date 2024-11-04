import axios from "axios";

const apiUrl = "https://668433b756e7503d1adfaa01.mockapi.io/api/new/Test";

const getRecords = async () => {
  const resp = await axios.get(apiUrl);
  return resp.data;
};

const deleteRecord = async (id) => {
  const resp = await axios.delete(apiUrl + "/" + id);
  return resp.data;
};

const addRecord = async (record) =>{
  const resp = await axios.post(apiUrl, record)
  return resp.data
}
const updateRecord = async (id, book) => {
  const resp = await axios.put(apiUrl + "/" + id, book);
  return resp.data;
};



export { getRecords, addRecord, deleteRecord, updateRecord };
