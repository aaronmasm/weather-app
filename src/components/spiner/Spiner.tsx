import styles from './Spiner.module.css';

export default function Spiner() {
    return (
        <div className={styles.spinner}>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
}