import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";



function CartModal(){
    const {total, price, cart, clear, toggle} = useValue();
    return  (
        <div className={styles.cartModal}>
            <div className={styles.closeButton} onClick={toggle}>
                Close
            </div>
            <div className={styles.clearButton} onClick={clear}>
                Clear
            </div>
            <div className={styles.itemContainer}>
        {cart.map((c) => (
                <div className={styles.cartCard} key={c.id}>
                    <h1>{c.name}</h1>
                    <h3>X {c.qty}</h3>
                    <h3>X {c.qty * c.price}</h3>
                </div>
        ))}
            </div>
            <div className={styles.total}>
                <div className={styles.totalText}>Total</div>
                <div className={styles.totalPrice}>{total}</div>
            </div>
        </div>
    )
}

export default CartModal;