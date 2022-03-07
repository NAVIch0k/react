export  const required=value=>{
    if(value){
        return undefined
    }
    return 'field is required'  
}

export  const max_length_creater=(length)=>(value)=>{
    if(value&&value.length>length){
        return `length over ${length}`
    }
    return undefined  
}