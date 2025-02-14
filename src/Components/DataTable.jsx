import { Table, TableContainer } from "./Styled-Components/TableComponent";

import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";

const DataTable = () => {
  const {
    data: orders,
    loading,
    error,
  } = useFetch("http://localhost:3000/orders");

  const {
    currentPage,
    totalPages,
    currentItems: currentOrders,
    handlePageChange,
  } = usePagination(orders, 15);

  return (
    <TableContainer>
      <PageHeader />
      <Table>
        <caption>Refund Requests</caption>
        <SearchBar />
        {loading ? (
          <tbody>
            <tr>
              <td
                colSpan="9"
                style={{ display: "flex", justifyContent: "center" }}
                id="loadingCell"
              >
                <h1>Loading...</h1>
              </td>
            </tr>
          </tbody>
        ) : (
          <>
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

              {/* Render current orders */}
              {currentOrders.length > 0 ? (
                currentOrders.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.reason}</td>
                    <td>{data.store_name}</td>
                    <td>
                      <img src={data.store_logo} alt={data.store_name} />
                    </td>
                    <td>
                      <a
                        href={data.store_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.store_url}
                      </a>
                    </td>
                    <td>${data.amount.toFixed(2)}</td>
                    <td>{data.active ? "Yes" : "No"}</td>
                    <td>{data.decision || "Pending"}</td>
                    <td>{data.items.length}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center" }}>
                    There are no orders.
                  </td>
                </tr>
              )}
            </tbody>

            {/* Pagination Controls */}
            <tfoot>
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </td>
              </tr>
            </tfoot>
          </>
        )}
      </Table>
    </TableContainer>
  );
};

export default DataTable;
