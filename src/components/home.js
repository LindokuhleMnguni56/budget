import AddItem from "./addItem";
import { DisplayTransaction } from "./displayTransaction";

function Home() {
    return(
        <div>
            <DisplayTransaction list={transaction} />
            <AddItem add={addTransaction} />
        </div>
    );
}

export default Home ;