import React, { useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";
import { Icon } from "../../atoms/Icon/Icon";
import { useDebounce } from "usehooks-ts";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You searched for ${searchTerm}`);
  };

  useEffect(() => {
    // Do fetch here...
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input type="text" value={searchTerm} onChange={handleChange} className={styles.searchInput} placeholder="Pain, lait, oeufs ..." />
      <button type="submit" className={styles.searchButton}>
        <Icon icon="search" />
      </button>
    </form>
  );
};

export default SearchInput;
