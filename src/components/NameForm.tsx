import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>あなたの名前は: {name}</p>
    </div>
  );
}

export default NameForm;
