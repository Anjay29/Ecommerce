
export const sendResponseError = (statusCode,msg,res) => {
    res.status(statusCode || 400).send(msg?msg:'Something went wrong')
}
