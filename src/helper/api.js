let port = 8080

export async function getCategory() {
    const category = await fetch(`http://44.201.88.37/api/v1/category`)
    return category.json()
}

export async function getArchive(){ 
    const archive = await fetch(`http://44.201.88.37/api/v1/archive`)
    return archive.json()
}


export async function getPaperData() { 
    const paper = await fetch(`http://44.201.88.37/api/v1/paper`)
    return paper.json()
}

export async function getBlogData() { 
    const blog = await fetch(`http://44.201.88.37/api/v1/blog`)
    return blog.json()
}