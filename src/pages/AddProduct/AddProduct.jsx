import React, { useState } from "react";
import axios from "../../axios.js";

import "./addProduct.scss";

const AddProduct = ({ user, setUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [prices, setPrices] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Добавляем состояние для URL изображения

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
        prices: parseFloat(prices),
        createdAt: new Date().toISOString(),
        userId: user.id, // Связываем продукт с пользователем
        img: imageUrl, // Добавляем URL изображения
      };

      // Добавляем продукт в коллекцию products
      const res = await axios.post("/products", newProduct);

      // Обновляем локальное состояние пользователя
      setUser((prevUser) => ({
        ...prevUser,
        products: [...(prevUser.products || []), res.data],
      }));

      // Обновляем локальное хранилище
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          products: [...(user.products || []), res.data],
        })
      );

      // Очищаем поля ввода
      setTitle("");
      setDescription("");
      setPrice("");
      setPrices("");
      setImageUrl(""); // Очищаем поле URL изображения

      alert("Продукт успешно добавлен!");
    } catch (err) {
      console.error(err);
      alert("Ошибка при добавлении продукта");
    }
  };

  return (
    <div className="container">
      <div className="overflow__add">
        <div className="add">
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
          <div className="add__price">
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Старая цена"
              value={prices}
              onChange={(e) => setPrices(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="URL изображения"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} // Добавляем обработчик для URL изображения
          />
          <button onClick={addProductHandler}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;