import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "ZawwarAhmed",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eum? Quis, cum porro asperiores fugit ex, eligendi quas officia, excepturi esse voluptates cumque? Odit temporibus eos officiis placeat corporis minima!",
  },
  {
    id: "123",
    username: "ZawwarAhmed",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eum? Quis, cum porro asperiores fugit ex, eligendi quas officia, excepturi esse voluptates cumque? Odit temporibus eos officiis placeat corporis minima!",
  },
  {
    id: "123",
    username: "ZawwarAhmed",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eum? Quis, cum porro asperiores fugit ex, eligendi quas officia, excepturi esse voluptates cumque? Odit temporibus eos officiis placeat corporis minima!",
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
