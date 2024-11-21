import {ChangeEvent, FormEvent, useState} from "react";
import type {SearchType} from "../../types";
import {countries} from "../../data/countries";
import styles from "./Form.module.css";
import Alert from "../alert/Alert";

type FormProps = {
    fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({fetchWeather}: FormProps) {
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: '',
    });

    const [alert, setAlert] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlert("Todos los campos son obligatorios");
            return;
        }

        setAlert(''); // Clear previous alerts
        await fetchWeather(search);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Country:</label>
                <select
                    name="country"
                    id="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option value="" className={`${styles.option} ${styles.placeholderOption}`}>
                        -- Choose a Country --
                    </option>
                    {countries.map((country) => (
                        <option
                            key={country.code}
                            value={country.code}
                            className={styles.option}
                        >
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            <input className={styles.submit} type="submit" value="Consultar Clima"/>
        </form>
    );
}
