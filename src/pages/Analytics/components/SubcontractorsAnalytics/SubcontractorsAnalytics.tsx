import SubcontractorsTable from "./SubcontractorsTable"
import { rbSubcontractors } from "../../../../rb/rb"

const SubcontractorsAnalytics = () => {
    return(
        <div>
            <SubcontractorsTable data={rbSubcontractors}/>
        </div>
    )
}

export default SubcontractorsAnalytics