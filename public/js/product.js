function onSubmitHandler(e) {
    e.preventDefault();
    const obj = {
        productName: e.target.productName.value
    }
    axios.post("http://localhost:3000/products", obj)
        .then(result=>{
            console.log(`The name of the product is ${result.data.name}`)
        })
        .catch(err=>console.log(err))
}