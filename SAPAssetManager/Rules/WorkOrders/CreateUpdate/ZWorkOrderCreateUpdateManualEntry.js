import libCom from "../../Common/Library/CommonLibrary";

export default function ZWorkOrderCreateUpdateManualEntry(context) {

    let manualEntry = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOrderSwitch').getValue();
    let manualOrder = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOrderInput')
    let ManualOperationInput = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOperationInput')
    let ManualCostCenterInput = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualCostCenterInput')
    let orderPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:RecOrderLstPkr');
    let operationPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:OperationLstPkr');
    let activityPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ActivityTypeLstPkr');

    if(manualEntry) {
        manualOrder.setVisible(true);
        ManualOperationInput.setVisible(true);
        ManualCostCenterInput.setVisible(true);
        orderPicker.setVisible(false);
        operationPicker.setVisible(false);
        activityPicker.setVisible(false);
    } else {
        manualOrder.setVisible(false);
        orderPicker.setVisible(true);
        operationPicker.setVisible(true);
        activityPicker.setVisible(true);
        ManualOperationInput.setVisible(false);
        ManualCostCenterInput.setVisible(false);
    }
}
