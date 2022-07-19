import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const POSTS_API_URL = "http://localhost:3000/api/posts";

export interface Post {
  id: number;
  subject: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostsState {
  status: "idle" | "loading" | "failed";
  posts: []; //change to Post[]?
}
 
// ENTITY ADAPTER
const postsAdapter = createEntityAdapter<Post>({
  // Keep the "all IDs" array sorted based on creation date
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

// ASYNC THUNKS
export const getPosts = createAsyncThunk(
  "posts/getPosts", //"slice/action" name (AsyncThunk name)
  async () => {
    const response = await axios.get(POSTS_API_URL);
    return response.data;
  }
);
export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (id: number) => {
    const response = await axios.get(`${POSTS_API_URL}${id}`);
    return response.data;
  }
);
export const postPost = createAsyncThunk(
  "posts/postPost",
  async (post: object) => {
    const response = await axios.post(POSTS_API_URL, post);
    return response.data;
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number) => {
    const response = await axios.delete(`${POSTS_API_URL}${id}`);
    return response.data;
  }
);

// SLICE
export const postsSlice = createSlice({
  name: "posts",
  // Returns a new entity state object: {ids: [], entities: {}}
  initialState: postsAdapter.getInitialState({
    status: "idle",
    posts: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "idle";

        /* upsertMany 
        will do a shallow copy to merge the old and new 
        entities overwriting existing values, adding any 
        that were not there and not touching properties not 
        provided in the new entity. */
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(postPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postPost.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
        postsAdapter.addOne(state, action.payload);
        console.log("postPost.fulfilled: ", action.payload);
      })
      .addCase(postPost.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// SELECTORS
export const postsSelectors = postsAdapter.getSelectors(
  (state: RootState) => state.posts
);

 

export default postsSlice.reducer;
