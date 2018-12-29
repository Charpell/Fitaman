import PleaseSignIn from '../components/PleaseSignin';
import OrderList from '../components/OrderList';

const OrderPage = props => (
  <div>
    <PleaseSignIn>
     <OrderList id={props.query.id} />  
    </PleaseSignIn>
  </div>
);

export default OrderPage;