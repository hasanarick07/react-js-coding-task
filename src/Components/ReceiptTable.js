import React from "react";

const ReceiptTable = ({ newReceipt }) => {
  const { date, amount, payment, remark } = newReceipt;
  return (
    <div className=" w-3/4 mx-auto ">
      <table className="table-auto">
        <thead>
          <tr>
            <th className=" p-7">Date</th>
            <th className=" p-7">Amount</th>
            <th className=" p-7">Payment Method</th>
            <th className=" p-7">Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{date}</th>
            <th>{amount}</th>
            <th>{payment}</th>
            <th>{remark}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptTable;
