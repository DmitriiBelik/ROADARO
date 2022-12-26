import QuarrysTable from "./QuarrysTable"
import { rbQuarrys } from "../../../../rb/rb"

const QuarryAnalytics = () => {
    return(
        <div>
            <QuarrysTable data={rbQuarrys}/>
        </div>
    )
}

export default QuarryAnalytics