import { Table, TableContainer } from "./Styled-Components/TableComponent";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { FaEye } from "react-icons/fa";
import Switch from "./Switch";
import { Link } from "react-router-dom";
const DataTable = ({
  caption,
  tableHeaders,
  currentOrders,
  loading,
  currentPage,
  totalPages,
  onSearchChange,
  searchTerm,
  handlePageChange,
  handleDecisionChange,
  handleStatusChange,
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
                <tr
                  key={data.id}
                  className={
                    data.decision === "Escalate"
                      ? "escalate-action-row"
                      : data.decision === "Accept"
                      ? "accept-action-row"
                      : data.decision === "Reject"
                      ? "reject-action-row"
                      : ""
                  }
                >
                  <td>{data.id}</td>
                  <td>{data.reason}</td>
                  <td>{data.store_name}</td>
                  <td>
                    <img src={data.store_logo} alt={data.store_name} />
                  </td>
                  <td>
                    <a
                      className="store-website"
                      href={data.store_url}
                      target="_blank"
                    >
                      {data.store_name + " Website"}
                    </a>
                  </td>
                  <td>${data.amount.toFixed(2)}</td>
                  <td>{data.active ? "Yes" : "No"}</td>
                  <td>{data.decision || "Pending"}</td>
                  <td>{data.items.length}</td>
                  <td>
                    <div className="actions">
                      <select
                        value={data.decision || "not yet"}
                        onChange={(e) =>
                          handleDecisionChange(data.id, e.target.value)
                        }
                      >
                        <option value="not yet">Not Yet</option>
                        <option value="Reject">Reject</option>
                        <option value="Accept">Accept</option>
                        <option value="Escalate">Escalate</option>
                      </select>
                      <Switch
                        checked={data.active}
                        id={data.id}
                        handleStatusChange={handleStatusChange}
                      />
                      <Link to={"/itemProfile"} className="navigate-action">
                        {" "}
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  style={{ textAlign: "center" }}
                >
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
