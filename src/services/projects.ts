import {getDatabase, ref, push, set, get, query} from 'firebase/database'

export async function addProject(projectParams: any){
    const paramsList = {
        responsible: projectParams.responsible,
        projectName: projectParams.projectName,
        roadClass: projectParams.roadClass,
        workType: projectParams.workType,
        filial: projectParams.filial,
        roadLength: projectParams.roadLength,
        quarry: projectParams.quarry,
        dateStart: projectParams.dateStart,
        dateEnd: projectParams.dateEnd,
        subcontractor: projectParams.subcontractor,
        mark: 0,
        reviews: 0
    }
    const oRef = await push(
        ref(
            getDatabase(),
            `projects`
        )
    );
    await set(oRef, paramsList);
}


export async function getProjects(){
    const oSnapshot = await get(query(ref(getDatabase(),`projects`)));
    const oArr: any[] = []
    let oParam;
    oSnapshot.forEach((oDoc) => {
        oParam = oDoc.val();
        oParam.key = oDoc.key;
        oArr.push(oParam);
    });
    return oArr
}



