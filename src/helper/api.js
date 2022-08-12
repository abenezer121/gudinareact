import { applyMiddleware } from "redux"

let port = 8080

export async function getCategory() {
    const category = await fetch(`https://44.204.78.162/api/v1/category`)
    return category.json()
}

export async function getArchive(){ 
    const archive = await fetch(`https://44.204.78.162/api/v1/archive`)
    return archive.json()
}


export async function getPaperData() { 
    const paper = await fetch(`https://44.204.78.162/api/v1/paper`)
    return paper.json()
}

export async function getBlogData() { 
    const blog = await fetch(`https://44.204.78.162/api/v1/blog`)
    return blog.json()
}


// server {
//     listen 80;
//     server_name api.gudina.app;
//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_set_header Host $host;
//         proxy_set_header X- Real - IP $remote_addr;
//         proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;
//         proxy_set_header X - Forwarded - Proto $scheme;
        
//     }
// }