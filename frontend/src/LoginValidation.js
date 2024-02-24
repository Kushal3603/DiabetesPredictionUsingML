function validation(values){
    let error={};
    if(values.email===""){
        error.email='Field should not be empty'
    }
    return error;
}
export default validation