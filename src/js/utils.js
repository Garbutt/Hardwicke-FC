export function slugify(text){
    return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, '-')
    .replace(/^-+$/, '');

}

export function fromatDate(date){
    return new Date(date).toLocaleDateString('en-Us',{
        timeZone: "UTC",
    })
}