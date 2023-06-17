import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreasetotalcount, increasetotalcount } from "../../slice/CartSlice";

const CartPage = () => {
  const { cart, totalQuantity, size, totalPrice, toppings } = useSelector(
    (state) => state.allCart.cartreducer
  );

  console.log(size);
  const arr = cart.map((object) => ({
    ...object,
    quantity: 1,
  }));
  const dispatch = useDispatch();
  const [qty, setQty] = useState(arr);

  const handleIncreaseCount = (index, key) => {
    const updatedArray = [...qty];
    updatedArray[index] = {
      ...updatedArray[index],
      [key]: updatedArray[index][key] + 1,
    };
    setQty(updatedArray);
  };

  const handledecreaseCount = (index, key) => {
    const updatedArray = [...qty];
    updatedArray[index] = {
      ...updatedArray[index],
      [key]: updatedArray[index][key] - 1,
    };
    setQty(updatedArray);
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">items</h5>
                </div>
                <div className="card-body">
                  {qty?.map((data, ind) => (
                    <div className="row" key={arr.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.img_url}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.name}</strong>
                        </p>

                        <div>Size-{size}</div>
                        <div>Toppings-{toppings}</div>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() => {
                              handledecreaseCount(ind, "quantity");
                              dispatch(decreasetotalcount());
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              // value={quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                            <label className="form-label" for="form1">
                              {data.quantity} Qty
                            </label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() => {
                              handleIncreaseCount(ind, "quantity");
                              dispatch(increasetotalcount());
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>Price - ${data.price}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
