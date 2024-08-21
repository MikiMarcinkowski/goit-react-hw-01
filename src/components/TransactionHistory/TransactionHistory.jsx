import PropTypes from "prop-types";
import css from './transaction-history.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transactionTable}>
        <thead className={css.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.bool,
  currency: PropTypes.string,
};
