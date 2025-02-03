/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZValueManualOperationInput(context) {
    if(context.binding.Operation){
        return context.binding.Operation;
    }
    return '';
}