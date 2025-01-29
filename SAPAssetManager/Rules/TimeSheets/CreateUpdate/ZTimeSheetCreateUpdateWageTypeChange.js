
export default function ZTimeSheetCreateUpdateWageTypeChange(context) {

    //HECO
    //Wage types significantly change time entry. They control whether or not time is entered against orders
    // and determine if an overclassification position can be selected
    // let ctrl = context.getPageProxy().getControl('FormCellContainer').getControl('ZWageTypeLstPkr');
    // let wageType = libCom.getListPickerValue(libCom.getControlProxy(context,'ZWageTypeLstPkr').getValue());
    let wageType = context.getPageProxy().getControl('FormCellContainer').getControl('ZWageTypeLstPkr').getValue();
    let orderPicker = context.getPageProxy().getControl('FormCellContainer').getControl('RecOrderLstPkr');
    let operationPicker = context.getPageProxy().getControl('FormCellContainer').getControl('OperationLstPkr');
    let durationPicker = context.getPageProxy().getControl('FormCellContainer').getControl('DurationPkr');
    let startTimePicker = context.getPageProxy().getControl('FormCellContainer').getControl('StartTimePicker');
    let endTimePicker = context.getPageProxy().getControl('FormCellContainer').getControl('EndTimePicker');
    let attendancePicker = context.getPageProxy().getControl('FormCellContainer').getControl('AbsAttLstPkr');
    let positionPicker = context.getPageProxy().getControl('FormCellContainer').getControl('ZEmployeePositionLstPkr');

    if (wageType.length == 1) {
        wageType = wageType[0].ReturnValue;

        //Attendance is incompatible with wage types
        attendancePicker.setEditable(false);
        attendancePicker.setValue('');

        //All wage types use duration instead of start/end time
        durationPicker.setEditable(true);
        startTimePicker.setEditable(false);
        endTimePicker.setEditable(false);


        //Order selections are only available for wage type 1104
        if (wageType == '1104') {
            orderPicker.setEditable(true);
            operationPicker.setEditable(true);
        } else {
            orderPicker.setEditable(false);
            orderPicker.setValue('');
            operationPicker.setEditable(false);
            operationPicker.setValue('');
        }

        //Overclassification position is allowed for the following wage types
        if (wageType == '1104'
            || wageType == '1114'
            || wageType == '1115'
            || wageType == '1116'
            || wageType == '1117'
            || wageType == '1134'
            || wageType == '1135'
            || wageType == '1136'
            || wageType == '1158'
            || wageType == '2007') {
            positionPicker.setEditable(true);
        } else {
            positionPicker.setEditable(false);
            positionPicker.setValue('');
        }
    } else { //No wage type selected
        
        attendancePicker.setEditable(true);
        orderPicker.setEditable(true);
        operationPicker.setEditable(true);

        //Normal time entry uses start/end time
        durationPicker.setEditable(false);
        startTimePicker.setEditable(true);
        endTimePicker.setEditable(true);

        //Overclassification allowed for time entry
        positionPicker.setEditable(true);
    }


}
