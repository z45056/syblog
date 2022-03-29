const validataList = {
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 6, max: 20, message: 'Length should be 6 to 6', trigger: 'blur' }
    ],
    'reply-password' : [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 6, max: 20, message: 'Length should be 6 to 6', trigger: 'blur' }
    ],

}
const getValidationRules  = (key) => {
    return validataList[key] || []
}
export default getValidationRules