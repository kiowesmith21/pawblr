interface IPost {
    title: string,
    caption: string,
    image: string
}

const PostCard = (post: IPost) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg" src={post.image} alt="img" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {post.caption}
        </p>
      </div>
    </div>
  )
}

export default PostCard
