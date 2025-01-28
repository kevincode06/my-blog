// src/components/Post.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('There was an error fetching the posts!', error));
  }, []);

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', newPost);
      setNewPost({ title: '', content: '', imageUrl: '' });
      alert('New post added!');
    } catch (error) {
      console.error('There was an error adding the post!', error);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.imageUrl} alt={post.title} />
        </div>
      ))}

      <h2>Add a New Post</h2>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default Post;
