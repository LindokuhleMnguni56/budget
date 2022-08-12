import React from "react";
import "../css/balance.css"

function BudgetBalance (){
    return(
        <div>
            <div style={{marginType: "5%"}}>
                <h4>Your Balance</h4>
                <h2>R4000</h2>
            </div>

            <div className="balance"></div>

            <div>
                <h3>Income</h3>
                <h3>R1200</h3>
            </div>

            <div className="line"></div>

            <div>
                <h3>Expense</h3>
                <h3>R800</h3>
            </div>
        </div>
    )
}

export { BudgetBalance };