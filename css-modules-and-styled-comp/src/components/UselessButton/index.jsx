import styles from "./UselessButton.module.css";

const UselessButton = () => {
    return (
        <button className={styles.useless_indicator}>
            A button that does absolutely nothing :D
        </button>
    );
};

export default UselessButton;
