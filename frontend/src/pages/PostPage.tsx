import { Key, useState } from "react"

const PostPage = () => {

  interface IPost {
    _id: Key | null | undefined
    title: string,
    caption: string,
    image: string
  }

  const [title, setTitle] = useState('')
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState<string[]>([])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const post = {title, caption, image}

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json() //get the response

    if(!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if(response.ok) {
      //reset state
      setTitle('')
      setCaption('')
      setImage('')
      setError(null)
      setEmptyFields([])
      console.log('Post added', json)
    }
    
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create a post:</h5>
              <div>
                <label htmlFor="image-link" className="block mb-2 text-sm font-medium text-gray-900 ">Image Link:</label>
                <input type="text" onChange={(e) => setImage(e.target.value)} value={image} name="image-link" id="image-link" className={`bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${emptyFields.includes('image') ? 'error' : ''}`} placeholder="Add a link" required />
              </div>
              <div>
                <label htmlFor="post-title" className="block mb-2 text-sm font-medium text-gray-900 ">Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="post-title" id="post-title" placeholder="Add a title" className={`bg-gray-50 border 
                border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${emptyFields.includes('title') ? 'error' : ''}`} required />
              </div>
              <div>
                <label htmlFor="caption" className="block mb-2 text-sm font-medium text-gray-900 ">Caption:</label>
                <textarea id="caption" rows={4} onChange={(e) => setCaption(e.target.value)} value={caption} className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${emptyFields.includes('caption') ? 'error' : ''}`} placeholder="Caption your post..."></textarea>
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600">Post</button>
          
          {error && <div className='error'>{error}</div>}
          </form>
      </div>
    </div>
  )
}

export default PostPage