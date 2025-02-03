/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZTimeSheetOperation(context) {
    let page = `#Page:${context.getPageProxy().currentPage.id}/#Control:ManualOperationInput`;
    if(context.evaluateTargetPath(`${page}`).getValue()){
        let ManualOperationInput =  context.evaluateTargetPath(`${page}`).getValue();
        return ManualOperationInput;
    }
    return '';
}