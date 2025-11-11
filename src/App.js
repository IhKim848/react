import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [currentArray, setCurrentArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDo.trim() === "") return; // 빈 입력 방지
    setCurrentArray([...currentArray, toDo]); // 새로운 toDo를 배열에 추가
    setToDo(""); // 입력창 초기화
  };

  const handleDelete = (index) => {
    const filteredArray = currentArray.filter((_, i) => i !== index);
    setCurrentArray(filteredArray); // index로 삭제
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>My To Dos ({currentArray.length})</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your to do..."
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
          style={{
            width: "250px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add To Do
        </button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentArray.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              margin: "8px 0",
              padding: "10px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {item}
            <span
              onClick={() => handleDelete(index)}
              style={{
                color: "red",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
