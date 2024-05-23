import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SecCont from "../../components/Section/Cont/SecCont";
import axios from "axios";
import ProductBasket from "../../components/Card/ProductWish";
const Wishlist = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://664f2fb5fafad45dfae2b770.mockapi.io/wish")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removewish = (id) => {
    axios.delete(`https://664f2fb5fafad45dfae2b770.mockapi.io/wish/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };
  return (
    <div>
      <Header />
      <Section />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Mehsullar</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            flexWrap: "wrap",
          }}
        >
          {data &&
            data.map((item) => (
              <ProductBasket
                item={item}
                removewish={() => removewish(item.id)}
              />
            ))}
        </div>
      </div>
      <SecCont />
    </div>
  );
};

export default Wishlist;