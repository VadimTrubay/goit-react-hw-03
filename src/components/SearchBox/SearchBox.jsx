import styles from "./SearchBox.module.css";

const SearchBox = ({ filter }) => {
  const handleFilter = (evt) => {
    filter(evt.currentTarget.value);
  };
  return (
    <div className={styles.search_box}>
      <p>Find contact by name</p>
      <input type="text" onChange={handleFilter} />
    </div>
  );
};

export default SearchBox;
