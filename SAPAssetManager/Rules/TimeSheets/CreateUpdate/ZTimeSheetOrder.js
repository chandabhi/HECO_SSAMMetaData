/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZTimeSheetOrder(context) {
    let page = `#Page:${context.getPageProxy().currentPage.id}/#Control:ManualOrderInput`;
    if(context.evaluateTargetPath(`${page}`).getValue()){
        let ManualOrderInput =  context.evaluateTargetPath(`${page}`).getValue();
        return ManualOrderInput;
    }
    
    return '';
}