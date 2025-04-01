import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((d) => (
        <ItemCard  key={d.id} id={d.id} name={d.name} price={d.price} />
      ))}
      
    </div>
  );
}

export default Items;
