import libCom from "../../Common/Library/CommonLibrary";

export default function ZWorkOrderCreateUpdateManualEntry(context) {

    let manualEntry = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ManualOrderSwitch').getValue();
    let manualOrder = context.getControl('#Page:TimeEntryCreateUpdatePage/#Control:ManualOrderInput')
    let orderPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:RecOrderLstPkr');
    let operationPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:OperationLstPkr');
    let activityPicker = context.evaluateTargetPath('#Page:TimeEntryCreateUpdatePage/#Control:ActivityTypeLstPkr');

    if(manualEntry) {
        manualOrder.setVisible(true);
        orderPicker.setVisible(false);
        operationPicker.setVisible(false);
        activityPicker.setVisible(false);
    } else {
        manualOrder.setVisible(false);
        orderPicker.setVisible(true);
        operationPicker.setVisible(true);
        activityPicker.setVisible(true);
    }
}
