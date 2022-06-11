const setAlert = (msg , type = "success") => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`
}

const areaCal = (type , val1 , val2) => {
    if(type == 'Rectangle'){
        return setAlert(`The area of Rectangle is ${val1 * val2}` , 'success')
    }else if (type == 'Square'){
        return setAlert(`The area of Square is is ${val1 * val1}` , 'success')
    }else if (type == 'Triangle'){
        return setAlert(`The area of Triangle is is ${ .5 * (val1 * val2)}`)
    }else if (type == 'Circle'){
        return setAlert(`The area of Triangle is is ${3.1416 * val1}`);
    }
}