/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZTimeSheetCostCenter(context) {
    let page = `#Page:${context.getPageProxy().currentPage.id}/#Control:ManualCostCenterInput`;
    if(context.evaluateTargetPath(`${page}`).getValue()){
        let ManualCostCenterInput = context.evaluateTargetPath(`${page}`).getValue();
        return ManualCostCenterInput;
    }
    return '';
}