import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SecCont from "../../components/Section/Cont/SecCont";
import axios from "axios";
import ProductCard from "../../components/Card/ProductCard";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket=(data)=>{
    axios.post('https://664f2fb5fafad45dfae2b770.mockapi.io/product', data)
  }
  const addToWish=(data)=>{
    axios.post('https://664f2fb5fafad45dfae2b770.mockapi.io/wish',data)
  }
  return (
    <div >
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
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', width:'80%',flexWrap:'wrap'}}>{data && data.map((item) => <ProductCard item={item} 
        addToBasket={()=>addToBasket(item) }
        addToWish={()=>addToWish(item)}
        />)}</div>
      </div>
      <SecCont />
    </div>
  );
};

export default Home;
