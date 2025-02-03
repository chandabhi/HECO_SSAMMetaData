/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZTimeSheetEntryRecOrderVisible(context) {
    if(context.binding.RecOrder||context.binding.ZRecCCtr){
        return false;
    }
    return true;
}