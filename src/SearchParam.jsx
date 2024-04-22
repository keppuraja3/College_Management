import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function SearchParam() {
  const [searchParam, setSearchParam] = useSearchParams();

  const isActive = searchParam.get("filter") === "active";

  return (
    <>
      <h1>Search Param</h1>
      <Button
        variant="primary"
        onClick={() => setSearchParam({ filter: "active" })}
      >
        active
      </Button>
      &nbsp;
      <Button variant="warning" onClick={() => setSearchParam({})}>
        Reset
      </Button>
      {isActive ? <h1>This is active</h1> : <h1>Not active</h1>}
    </>
  );
}

export default SearchParam;
