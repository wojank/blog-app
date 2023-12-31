import { useAllPosts } from "../Hooks/PostsHooks";
import MainContainer from "../Components/MainContainer";
import PostCard from "../Components/PostCard";
import CategoryFilter from "../Components/CategoryFilter";
import TheSubscribe from "../Components/TheSubscribe";
import MostPopular from "../Components/MostPopular";
import TheSocials from "../Components/TheSocials";
import CtaLogin from "../Components/CtaLogin";
import TheCarousel from "../Components/TheCarousel";
import "../assets/scss/pages/home-page.scss";

const HomePage = () => {
  const postList = useAllPosts();

  return (
    <MainContainer>
      <section className="grid">
        <div className="grid__heading heading">
          <h1 className="grid__title" onClick={() => console.log(postList)}>
            Filmowy blog
          </h1>
          <p className="grid__subtitle">
            Teksty najlepszych krytyków codziennie
          </p>
        </div>
        <aside className="grid__sidebar sidebar">
          <CategoryFilter />
          <TheSubscribe />
          <MostPopular />
        </aside>
        {postList == null
          ? ""
          : postList.map((post, index) => {
              if (index == 0) {
                return (
                  <PostCard
                    key={post._id}
                    post={post}
                    style={{ gridColumn: "span 2", gridRow: "2 / span 2" }}
                    imgsize={400}
                  />
                );
              } else {
                return <PostCard key={post._id} post={post} />;
              }
            })}
      </section>
      <CtaLogin />
      <TheCarousel />
      <TheSocials />
    </MainContainer>
  );
};

export default HomePage;
