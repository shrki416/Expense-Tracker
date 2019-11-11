import React from 'react'

export default function ExpenseTable() {
    return (
      <div className="col-8">
        <table className="table table-sm table-striped table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fad fa-credit-card"></i>
              </td>
              <td>Lunch</td>
              <td>11/10/2019</td>
              <td>$50.00</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <i className="fal fa-money-bill-wave"></i>
              </td>
              <td>Dinner</td>
              <td>11/09/2019</td>
              <td>$25.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
