import EmployeeAnalyticTable from "./EmplAnalyticTable"
import { EmpData } from "./data"

const EmployeeAnalytic = () => {
    return(
        <div>
            <EmployeeAnalyticTable data={EmpData}/>
        </div>
    )
}

export default EmployeeAnalytic