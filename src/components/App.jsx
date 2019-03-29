import React, { useState } from "react";
import ResourcesList from "./ResourcesList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
        <ResourcesList resource={resource} />
      </div>
    </div>
  );
};

export default App;
