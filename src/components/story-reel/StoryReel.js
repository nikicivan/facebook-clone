import React from "react";
import Story from "../story/Story";
import "./storyReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="./images/mz.jpg"
        profileSrc="https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/79515135_10111007623880301_5111576226921709568_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=VG5YZ_no91QAX_tVrDr&_nc_ht=scontent.fbeg2-1.fna&oh=59fd50c7394b5e1d525d1d72791b2463&oe=5F946887"
        title="Mark Zuckerberg"
      />
      <Story
        image="./images/im.jpg"
        profileSrc="https://zn.ua/img/forall/u/0/-1/users/Jun2017/178653.jpg"
        title="Ilon Mask"
      />
      <Story
        image="./images/jb.jpg"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        title="Jeff Bezos"
      />
      <Story
        image="./images/nt.jpg"
        profileSrc="https://aurora.ekof.bg.ac.rs/~s130023/slike/N.Tesla.JPG"
        title="Nikola Tesla"
      />
      <Story
        image="./images/ndj.jpg"
        profileSrc="https://www.atptour.com/-/media/tennis/players/head-shot/2019/djokovic_head_ao19.png"
        title="Novak Djokovic"
      />
    </div>
  );
};

export default StoryReel;
