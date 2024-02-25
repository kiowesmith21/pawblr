import { Key, useEffect, useState } from "react"
import PostCard from "../components/PostCard"

const Home = () => {

    interface IPost {
        _id: Key | null | undefined
        title: string,
        caption: string,
        image: string
    }

    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts/', {
                method: "GET"
            })
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }
        fetchPosts()
    }, [])

  return (
    <div className="home">
        <div className="posts-container flex flex-col space-y-40 mt-20 items-center justify-center">
            {posts && posts.map(post => (
                <PostCard key={post._id} title={post.title} caption={post.caption} image={post.image}  /> 
            ))} 
        </div>
    </div>
  )
}

export default Home