import React from "react";

function AddCard() {
  return (
    <div className="Card-Add">
      <h1>Add New Anime</h1>
      <form method="POST" action="http://localhost:5000/add-anime">
        <div>
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Image</label>
          <input type="text" name="image" required />
        </div>
        <div>
          <label>Years</label>
          <input type="number" name="years" required />
        </div>
        <div>
          <label>episodes</label>
          <input type="number" name="episodes" required />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" required />
        </div>

        <div>
          <button type="submit">Add Anime</button>
        </div>
      </form>
    </div>
  );
}

export default AddCard;
