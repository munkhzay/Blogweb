import { BlogCard } from "../components/BlogCard";
import useSWR from "swr";
import { TrendingBlogCards, Trending } from "@/components/Trend";
import { Slide } from "@/components/Slider";
import { useContext, useState } from "react";
import { More } from "@/components/Loadmore";
import { ThemeContext } from "@/components/ThemeContext";

const Home = () => {
  const { blogs, tags } = useContext(ThemeContext);

  // const { post, setPost } = useState(9);
  const trendingBlogs = blogs?.slice(0, 4);
  // const allblogs = () => {
  //   setPost((prev) => prev + 9);
  // };
  // const slider = blogs?.slice(0, 1);

  return (
    <div className="flex flex-col gap-[100px] ">
      <div className="text-center px-10 xl:max-w-[1024px] xl:m-auto flex flex-col gap-[20px] lg:gap-[100px]  ">
        <div className="">
          <Slide></Slide>
        </div>
        <div className=" flex flex-col gap-[30px]">
          <Trending />
          <div className="carousel carousel-center rounded-box gap-4">
            {trendingBlogs?.map((blog) => {
              return (
                <div className="" key={blog.id}>
                  <TrendingBlogCards
                    id={blog.id}
                    key={blog.id}
                    img={blog.cover_image}
                    text={blog.title}
                    tag={blog.tag_list[0]}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <More></More>
        </div>
      </div>
    </div>
  );
};
export default Home;
