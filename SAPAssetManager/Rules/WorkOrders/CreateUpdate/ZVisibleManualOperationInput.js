/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZVisibleManualOperationInput(context) {
    if(context.binding.Operation){
        return true;
    }
    return false;
}