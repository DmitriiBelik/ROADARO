import FililsTable from "./FilialsTable"
import { rbFilials } from "../../../../rb/rb"

const FilialAnalytics = () => {
    return (
        <div>
            <FililsTable data={rbFilials}/>
        </div>
    )
}

export default FilialAnalytics