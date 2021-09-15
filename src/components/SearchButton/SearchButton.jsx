import SearchIcon from "@material-ui/icons/Search";
import style from "../SearchButton/StyledSearchButton.module.css";

export default function SearchButton() {
  return (
    <div>
      <button className={style.searchButton} type="submit" aria-label="search">
        <SearchIcon />
      </button>
    </div>
  );
}
