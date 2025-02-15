import { useLoaderData, useParams } from "react-router-dom";
import { ItemProfileContainer } from "../Components/Styled-Components/ItemProfile";

const ItemProfile = () => {
  //extracting data using useLoader data from react router dom
  const order = useLoaderData();
  console.log(order)

  return (
    <ItemProfileContainer>
      <h1>Order Details</h1>
      <div>
        <h2>Order ID: {order.id}</h2>
        <p>
          <strong>Reason:</strong> {order.reason}
        </p>
        <p>
          <strong>Store Name:</strong> {order.store_name}
        </p>
        <img
          src={order.store_logo}
          alt="Store Logo"
        />
        <p>
          <strong>Store URL:</strong>{" "}
          <a href={order.store_url} target="_blank">
            {order.store_url}
          </a>
        </p>
        <p>
          <strong>Total Amount:</strong> ${order.amount.toFixed(2)}
        </p>
        <p>
          <strong>Status:</strong> {order.active ? "Active" : "Inactive"}
        </p>
        <p>
          <strong>Decision:</strong> {order.decision||"Not Yet"}
        </p>
      </div>

      <h2>Items in Order</h2>
      <ul className="items-list">
        {order.items.map((item) => (
          <li key={item.id} className="item">
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity}
            </p>
          </li>
        ))}
      </ul>
    </ItemProfileContainer>
  );
};
export default ItemProfile;

//initialize loader function for this page, get the params to easily fetch the required item data
//return: data returned from the api call
export const loader = async ({ params }) => {
  const id = params.id;
  let url = `http://localhost:3000/orders/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw json({ message: "Error fetching item details" });
  }
};
