/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZVisibleCostCent(context) {
    if(context.binding.ZRecCCtr){
        return true;
    }
    return false;
}