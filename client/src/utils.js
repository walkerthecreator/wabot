export const truncateFunction = (txt) => {
    let updatedTxt = ""
    if(txt.length>=12){
       for(let i in txt){
            if(i<20){
                updatedTxt+=txt[i]
            }
            else if(i<21){
                updatedTxt += '...'
            }
       }
    }
    return updatedTxt
}
