/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function ZValueCostCent(context) {
    if(context.binding.ZRecCCtr){
        return context.binding.ZRecCCtr;
    }
    return '';
}