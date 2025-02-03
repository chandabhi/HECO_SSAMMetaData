/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZValueManualOrderInput(context) {
    if(context.binding.RecOrder){
        return context.binding.RecOrder;
    }
    return '';
}