import { useState } from "react";
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

export default function editPostForm() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="label" htmlFor="newName">
          New Name
        </label>
        <input
          type="text"
          id="username"
          className="input"
          value={name}
          placeholder="Buggati"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label" htmlFor="description ">
          Description
        </label>
        <input
          type="description"
          id="description"
          value={description}
          className="input"
          placeholder="Super Funny Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className="label" htmlFor="price">
          Price
        </label>
        <input
          type="description"
          id="price"
          className="price"
          placeHolder="$$$"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button
          type="submit"
          className="button"
          onClick={console.log("New Details", name, description, price)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
