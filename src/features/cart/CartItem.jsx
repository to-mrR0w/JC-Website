import "./cart.css";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrQuantityById,
  increaseItemQuantity,
} from "./cartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();

  const { data } = props;

  const { name, productImg, unitPrice, cartId: id } = data;
  const quantity = useSelector(getCurrQuantityById(id));
  return (
    <div className="cartItem">
      <img src={productImg} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>{unitPrice}</p>
      </div>
      <div className="countHandler">
        {" "}
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(increaseItemQuantity(id));
          }}
        >
          {" "}
          <FaAngleUp />{" "}
        </button>
        {quantity > 1 && (
          <button
            className="relative left-[-40px] bottom-[-30px]"
            onClick={() => dispatch(deleteItem(id))}
          >
            <FaTimes color="red" />
          </button>
        )}
        <input value={quantity} disabled onChange={(e) => e.preventDefault()} />
        {quantity <= 1 ? (
          <button onClick={() => dispatch(deleteItem(id))}>
            <FaTimes />
          </button>
        ) : (
          <button onClick={() => dispatch(decreaseItemQuantity(id))}>
            <FaAngleDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
