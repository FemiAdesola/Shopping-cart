import React, {useEffect, Component}from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchOrders } from '../store/action/orderActions';
import FormatCurrency from '../util';


class Orders extends Component {
    componentDidMount() {
      this.props.fetchOrders();
    }
    render() {
      const { orders } = this.props;
      return !orders ? (
        <div>Orders</div>
      ) : (
        <div className="orders">
            <div className='order-list'> 
                <h2>List of item Ordered</h2>
            </div>
            <p>Total number of item ordered: {orders.length}</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>ITEMS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td> {FormatCurrency(order.total)}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.cartItems.map((item) => (
                      <div key={item._id}>
                        {item.count} {" x "} {item.title}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  export default connect(
    (state) => ({
      orders: state.order.orders,
    }),
    {
      fetchOrders,
    }
  )(Orders);

// const Orders = ({orders}) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(fetchOrders());
//     }, [])
   
//     return !orders ? (
//         <div>
//             Orders
//         </div>
//         ) :(
//             <div className="orders">
//         <h2>Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>DATE</th>
//               <th>TOTAL</th>
//               <th>NAME</th>
//               <th>EMAIL</th>
//               <th>ADDRESS</th>
//               <th>ITEMS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr>
//                 <td>{order._id}</td>
//                 <td>{order.createdAt}</td>
//                 <td> {FormatCurrency(order.total)}</td>
//                 <td>{order.name}</td>
//                 <td>{order.email}</td>
//                 <td>{order.address}</td>
//                 <td>
//                   {order.cartItems.map((item) => (
//                     <div>
//                       {item.count} {" x "} {item.title}
//                     </div>
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
// };

// export default connect(
//     (state) => ({
//        orders: state.orders.orders
//     }),
//     {fetchOrders}
// )(Orders);