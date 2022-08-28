import { applyMiddleware } from "redux"

let port = 8080

export async function getCategory() {
    const category = await fetch(`https://api.gudinatumsalegacy.org/api/v1/category`)
    return category.json()
}

export async function getArchive(){ 
    const archive = await fetch(`https://api.gudinatumsalegacy.org/api/v1/archive`)
    return archive.json()
}


export async function getPaperData() { 
    const paper = await fetch(`https://api.gudinatumsalegacy.org/api/v1/paper`)
    return paper.json()
}

export async function getBlogData() { 
    const blog = await fetch(`https://api.gudinatumsalegacy.org/api/v1/blog`)
    return blog.json()
}


