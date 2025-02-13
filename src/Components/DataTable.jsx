import { Table } from "./Styled-Components/TableComponent";

const DataTable = () => {
  const isLoading = false;
  const employeeArray = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "blabla@blabla.com",
    },
  ];
  return (
    <Table>
      <caption>Employees</caption>
      {isLoading ? (
        <tbody>
          <tr>
            {/* centering the spinner in the middle of table */}
            <td
              colSpan="7"
              style={{ display: "flex", justifyContent: "center" }}
              id="loadingCell"
            >
              {/* <MoonLoader color="#811493" /> */}
              <h1>Loading...</h1>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

          {/* conditonally rendering the employees data */}

          {employeeArray.length > 0 ? (
            employeeArray.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.salary}</td>
                <td>{data.date}</td>
                <td>
                  <div>
                    {/* <Button
                      component={Link}
                      to={`edit/${data.id}`}
                      variant="outlined"
                      color="secondary"
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => {
                        deleteHandler(data.id);
                      }}
                    >
                      Delete
                    </Button> */}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                There are no employees yet.
              </td>
            </tr>
          )}
        </tbody>
      )}
    </Table>
  );
};

export default DataTable;
