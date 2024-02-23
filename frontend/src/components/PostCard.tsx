interface IPost {
    title: string,
    caption: string,
    image: string
}

const PostCard = (post: IPost) => {
  return (
    <div>{post.title}</div>
  )
}

export default PostCard
