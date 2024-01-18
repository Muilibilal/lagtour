import React, { useEffect, useState } from "react";

import styles from "./search.module.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [mainSearch, setMainSearch] = useState("");

  const clearInput = () => {
    setSearch("");
    setData([]);
  };

  useEffect(() => {
    if (!mainSearch) {
      setData([]);
    } else {
      const fetchQueryData = async () => {
        try {
          const response = await fetch("/data.json");
          if (!response.ok) throw new Error(response.text);

          const data = await response.json();

          let query = data.map((data) => {
            let holder = data.name
              .toLowerCase()
              .includes(mainSearch.toLowerCase());

            return holder ? { id: data.id, name: data.name } : null;
          });

          setData(query);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchQueryData();
    }

    console.log("searching...");
  }, [mainSearch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMainSearch(search);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  return (
    <div className={styles["search-container"]}>
      <input
        className={styles["search-input"]}
        type="text"
        value={search}
        placeholder="Search for a destination..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className={styles.dropdown}>
        {data.length
          ? data.map((val) => {
              return (
                val && (
                  <Link
                    to={`/destination/${val.id}`}
                    onClick={clearInput}
                    style={{ textDecoration: "none" }}
                  >
                    <span key={val?.id}>{val?.name}</span>
                  </Link>
                )
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
