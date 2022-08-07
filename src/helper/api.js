let port = 8080

export async function getCategory() {
    const category = await fetch(`http://localhost:${port}/api/v1/category`)
    return category.json()
}

export async function getArchive(){ 
    const archive = await fetch(`http://localhost:${port}/api/v1/archive`)
    return archive.json()
}


export async function getPaperData() { 
    const paper = await fetch(`http://localhost:${port}/api/v1/paper`)
    return paper.json()
}