/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZOnValueChangeManualOrderInput(context) {
    let manualOrder = context.getValue();
    let ManualCostCenterInput = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualCostCenterInput');
    if(manualOrder.getValue()){
        return ManualCostCenterInput.setVisible(false);
    }
    else{
        return ManualCostCenterInput.setVisible(true);
    }
}