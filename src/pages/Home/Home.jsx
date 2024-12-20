import React, { useState } from "react";
import axios from "../../axios.js";

const Home = ({ user, setUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addProductHandler = async () => {
    if (!user || !user.id) {
      alert("Пользователь не авторизован");
      return;
    }

    try {
      const newProduct = {
        title,
        description,
        price: parseFloat(price),
        createdAt: new Date().toISOString(),
      };

      const res = await axios.patch(`/users/${user.id}`, {
        products: [...user.products, newProduct],
      });

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setTitle("");
      setDescription("");
      setPrice("");
      alert("Продукт успешно добавлен!");
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении продукта");
    }
  };

  return (
    <div>
      <h2>Добавить продукт</h2>
      <input
        type="text"
        placeholder="Название продукта"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Описание продукта"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProductHandler}>Добавить</button>
    </div>
  );
};

export default Home;
