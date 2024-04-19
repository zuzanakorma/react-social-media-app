import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGetPostQuery,useEditPostMutation } from "../../api/apiSlice";

export const EditPostForm =({match})=>{
  const {postId} = match.params;

  const { data: post} = useGetPostQuery(postId)
  const [updatePost, {isLoading}] = useEditPostMutation()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const history = useHistory()

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const onContentChange = (e) => {
    setContent(e.target.value)
  }

  const onSavePostClincked = async () => {
    if (title && content) {
      await updatePost({id: postId, title, content})
      history.push(`/posts/${postId}`)
    }

  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postContent">Post Content</label>
        <textarea
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChange}
        />
        <button className='green-button' type="button" onClick={onSavePostClincked}>Save Post</button>
      </form>
    </section>
  )

}