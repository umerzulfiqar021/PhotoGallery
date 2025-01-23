const Meta_URL = `https://picsum.photos/v2`
 export const getData = async (page = 1 )=> {
    const data = await fetch(`${Meta_URL}/list?page=${page}`);
    const photos = await data.json();
    return photos;
}
export const imageData = (id,width,height)=>{
    return `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(height)}`
    }