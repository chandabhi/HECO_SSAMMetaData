/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZCostCenterOnvalueChange(context) {
    let ManualCostCenterInput = context.getValue();
    let manualOrder = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOrderInput')
    let ManualOperationInput = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOperationInput')
    if(ManualCostCenterInput.length>0){
        manualOrder.setVisible(false);
        ManualOperationInput.setVisible(false);
    }else{
        manualOrder.setVisible(true);
        ManualOperationInput.setVisible(true);
    }
}