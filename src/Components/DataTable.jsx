import { Table, TableContainer } from "./Styled-Components/TableComponent";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

const DataTable = ({
  caption,
  tableHeaders,
  currentOrders,
  loading,
  currentPage,
  totalPages,
  handlePageChange,
  onSearchChange,
  searchTerm,
}) => {

  
  return (
    <TableContainer>
      <Table>
        <caption>{caption}</caption>
        <SearchBar value={searchTerm} onChange={onSearchChange} />
        {loading ? (
          <tbody>
            <tr>
              <td
                colSpan={tableHeaders.length}
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
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
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
                <td colSpan={tableHeaders.length} style={{ textAlign: "center" }}>
                  There are no orders.
                </td>
              </tr>
            )}
          </tbody>
        )}
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </TableContainer>
  );
};

export default DataTable;