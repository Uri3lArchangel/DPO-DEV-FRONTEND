export const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    }
}

export const onFinish = (values) => {
    console.log(values);
}

export const onAgreeChange = (e) => {
    return !e;
}