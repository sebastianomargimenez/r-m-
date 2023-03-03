import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   // props = { onSearch=función }

   const [character, setCharacter] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      //console.log(e);
      setCharacter(value);
   }

   return (
      <div className={styles.container}>
         <input
            type="search"
            name="search"   
            id="search"
            onChange={handleChange}
         />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
