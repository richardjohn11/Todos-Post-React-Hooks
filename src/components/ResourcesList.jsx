import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourcesList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  const renderResourcesList = () => {
    return resources.map(resource => (
      <li key={resource.id}>{resource.title}</li>
    ));
  };

  return (
    <div>
      <ul>{renderResourcesList()}</ul>
    </div>
  );
};

export default ResourcesList;
