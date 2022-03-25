import styles from './table.module.css';

const Table = ({data}) => {
    return (
        <div className={styles.container}>
            <table>
                <thead>
                <tr>
                    {Object.keys(data[0]).map((item, index) => <th key={index}>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => <tr key={index}>
                    <td>{item.amount}</td>
                    <td>{item.date.toLocaleString()}</td>
                </tr>)}
                </tbody>
            </table>
        </div>

    )
}

export default Table;