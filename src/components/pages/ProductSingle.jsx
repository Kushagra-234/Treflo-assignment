import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../slice/DataSlice";
import { addsize, addtocart, addtoppings } from "../../slice/CartSlice";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductSingle = () => {
  const data = useSelector((state) => state.allCart.datareducer);
  const { sort, rating } = useSelector((state) => state.allCart.cartreducer);

  const [show, setShow] = useState(false);
  console.log(rating);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  //  logic for sorting on basis of price
  const getSortedProducts = (data, sort) => {
    const sortedProducts = [...data].sort((item1, item2) =>
      sort === "lth"
        ? item1.price - item2.price
        : sort === "htl"
        ? item2.price - item1.price
        : data
    );
    return sortedProducts;
  };

  const sortedProducts = getSortedProducts(data, sort);

  const getSortedProductsbyrating = (data, sort) => {
    const sortedProducts = [...data].sort((item1, item2) =>
      rating === "lth"
        ? item1.rating - item2.rating
        : sort === "htl"
        ? item2.rating - item1.rating
        : data
    );
    return sortedProducts;
  };

  const sortedProductsbyrating = getSortedProductsbyrating(
    sortedProducts,
    rating
  );

  return (
    <>
      {sortedProductsbyrating.map((item) => {
        return (
          <div
            key={item.id}
            style={{ width: "22rem" }}
            className="col-lg-4 col-md-4 col-sm-12 mt-5"
          >
            <div className="card">
              <img
                src={item.img_url}
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  {item.name}
                </h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">$ {item.price}</p>
                <h6>Rating-{item.rating}</h6>
                {item.isVeg ? (
                  <p
                    style={{
                      fontWeight: "bolder",
                    }}
                  >
                    Vegiterian
                  </p>
                ) : (
                  <p
                    style={{
                      fontWeight: "bolder",
                    }}
                  >
                    Non-Vegiterian
                  </p>
                )}

                <a
                  onClick={() => {
                    dispatch(addtocart(item));
                    handleShow();
                  }}
                  className="btn btn-primary"
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Add-ons and Toppings </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Select Size
                <div>
                  <input
                    onChange={() => dispatch(addsize("Regular"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Regular</label>
                </div>
                <div>
                  <input
                    onChange={() => dispatch(addsize("Medium"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Medium</label>
                </div>
                <input
                  onChange={() => dispatch(addsize("Large"))}
                  className="mt-1"
                  type="checkbox"
                />
                <label className="ms-2">Large</label>
              </Modal.Body>
              {item.toppings.isRadio ? (
                <p className="ms-2">Elidgible for multiple toppings !!</p>
              ) : (
                <p className="ms-2">
                  Elidgible for single topping,please select only one topping !!
                </p>
              )}

              <Modal.Body>
                Select Toppings
                <div>
                  <input
                    onChange={() => dispatch(addtoppings("Red-pepper"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Red-pepper</label>
                </div>
                <div>
                  <input
                    onChange={() => dispatch(addtoppings("Onion"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Onion</label>
                </div>
                <div>
                  <input
                    onChange={() => dispatch(addtoppings("Extra cheese"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Extra cheese</label>
                </div>
                <div>
                  <input
                    onChange={() => dispatch(addtoppings("Black Olive"))}
                    className="mt-1"
                    type="checkbox"
                  />
                  <label className="ms-2">Black Olive</label>
                </div>
                <input
                  onChange={() => dispatch(addtoppings("Grilled Mushroom"))}
                  className="mt-1"
                  type="checkbox"
                />
                <label className="ms-2">Grilled Mushroom</label>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </>
  );
};

export default ProductSingle;
