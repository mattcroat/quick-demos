interface Post {
  [index: string]: {
    userId?: number
    id: number
    title: string
    body: string
  }
}

// "Type 'Field' cannot be used as an index type."
// interface Field {
//   [index: number]: string
// }

type Field = string

const fields: Field[] = ['id', 'title', 'body']

const getPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await response.json()
  return posts
}

const filteredPostData = async (): Promise<Post[]> => {
  const postsData = await getPosts()

  return postsData.map((post: Post) => {
    return fields.reduce((posts: Post, field: Field) => {
      posts[field] = post[field]
      return posts
    }, {})
  })
}
