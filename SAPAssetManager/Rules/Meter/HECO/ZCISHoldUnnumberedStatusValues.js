import CommonLibrary from "../../Common/Library/CommonLibrary";

export default function ZCISHoldUnnumberedStatusValues(context) {
    //Populates picker with valid unnumbered user statuses for the assigned notification type

    let operHold = CommonLibrary.getStateVariable(context, 'ZOperationHold');

    return context.read('/SAPAssetManager/Services/AssetManager.service', 'MyNotificationHeaders', [], `$filter=NotificationNumber eq '${operHold.WOHeader.NotificationNumber}'`).then(function (notifResult) {
        if (notifResult && notifResult.length > 0) {
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'ZNotifTypeEditableUserStatuses', [], `$filter=ZNotifType eq '${notifResult.getItem(0).NotificationType}' and ZUnnumberedUserStatusCode ne null`).then(function (results) {
                let pickerValues = [];

                for (let i = 0; i < results.length; i++) {
                    let currValue = results.getItem(i);
                    if(currValue.ZUnnumberedUserStatusCode) {
                        pickerValues.push({ 'DisplayValue': `${currValue.ZUnnumberedUserStatusCode} - ${currValue.ZUnnumberedUserStatusDesc}`, 'ReturnValue': currValue.ZUnnumberedUserStatusCode });
                    }
                }

                return pickerValues;
            });
        }
    });
}
