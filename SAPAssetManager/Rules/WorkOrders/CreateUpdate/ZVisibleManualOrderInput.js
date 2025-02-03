/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZVisibleManualOrderInput(context) {
    if(context.binding.RecOrder){
        return true;
    }
    return false;
}