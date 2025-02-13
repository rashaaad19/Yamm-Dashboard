import useFetch from "../hooks/useFetch";
import { Table } from "./Styled-Components/TableComponent";

const DataTable = () => {

  const { data:orders, loading, error } = useFetch("http://localhost:3000/orders");


  return (
    <Table>
      <caption>Refund Orders</caption>
      {loading ? (
        <tbody>
          <tr>
            {/* centering the spinner in the middle of table */}
            <td
              colSpan="7"
              style={{ display: "flex", justifyContent: "center" }}
              id="loadingCell"
            >
              <h1>Loading...</h1>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          <tr>
            <th>ID</th>
            <th>Reason</th>
            <th>Store Name</th>
            <th>Store Logo</th>
            <th>Store Website</th>
            <th>Amount</th>
            <th>Active</th>
            <th>Decision</th>
            <th>Items</th>

          </tr>

          {/* conditonally rendering the orders */}

          {orders.length>0 ? (
            orders.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.reason}</td>
                <td>{data.store_name}</td>
                <td><img src={data.store_logo}/></td>
                <td>{data.store_url}</td>
                <td>{data.amount}</td>
                <td>{data.active}</td>
                <td>{data.decision}</td>
                <td>{data.items.length}</td>

                {/* <td>
                  <div>
                    <Button
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
                    </Button>
                  </div>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                There are no orders.
              </td>
            </tr>
          )}
        </tbody>
      )}
    </Table>
  );
};

export default DataTable;
