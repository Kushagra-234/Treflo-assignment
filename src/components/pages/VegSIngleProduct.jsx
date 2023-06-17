import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "../../slice/DataSlice";
import { addtocart } from "../../slice/CartSlice";

const VegSingleProduct = () => {
  const data = useSelector((state) => state.allCart.datareducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const vegMenu = () => {
    const vegmenu = data.filter((item) => item.isVeg === true);
    return vegmenu;
  };

  const vegmenuprod = vegMenu();

  return (
    <>
      {vegmenuprod.map((items) => {
        return (
          <div
            key={items.id}
            style={{ width: "22rem" }}
            className="col-lg-4 col-md-4 col-sm-12 mt-5"
          >
            <div className="card">
              <img
                src={items.img_url}
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
                  {items.name}
                </h5>
                <p className="card-text">{items.description}</p>
                <p className="card-text">$ {items.price}</p>
                <h6>Rating-{items.rating}</h6>
                {items.isVeg ? (
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
                    dispatch(addtocart(items));
                  }}
                  className="btn btn-primary"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VegSingleProduct;
