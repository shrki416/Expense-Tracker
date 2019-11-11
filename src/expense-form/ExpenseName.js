import React from 'react'

export default function ExpenseName() {
    return (
        <div>
            <div className="card-body">
                <div className="form-group">
                    <label>Expense Name:</label>
                    <input type="text" className="form-control" 
                        placeholder="Your Expense Name Goes Here">
                    </input>
                </div>
            </div>
        </div>
    )
}
