import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api";
import { makeImagePath } from "../utils";

const Slide = styled.div`
  width: 1912px;
  height: 555px;
  margin: 64px 0;
`;
const CarouselWrapper = styled.div`
  display: flex;
`;
const Carousel = styled(motion.div)`
  position: absolute;
  left: -300px;
  width: 1240px;
  height: 508px;
  border-radius: 30px;
  color: ${(props) => props.theme.color.white};
`;

const Description = styled.div`
  position: absolute;
  bottom: 50px;
  left: 40px;
  h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  h3 {
    width: 50%;
    font-size: 20px;
  }
`;

const Img = styled(motion.div)<{ bgPhoto: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  border-radius: 30px;
`;

const LeftBtn = styled.button`
  position: absolute;
  left: 150px;
  top: 260px;
  border: none;
  background-color: transparent;
  font-size: 80px;
  color: ${(props) => props.theme.color.gray};
  &:hover {
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
  }
`;
const RightBtn = styled(LeftBtn)`
  left: auto;
  right: 150px;
`;

function MainCarousel() {
  const { data, isLoading } = useQuery("movies", getMovies);
  const movies = data?.results;
  const [position, setPosition] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onLeft = () => {
    if (position > 1) {
      setPosition(position - 1);
    }
  };

  const onRight = () => {
    if (position < movies.length) {
      setPosition(position + 1);
    }
  };

  return (
    <>
      <Slide>
        <AnimatePresence onExitComplete={toggleLeaving}>
          <CarouselWrapper>
            {movies?.slice(4).map((movie: any, index: any) => (
              <Carousel
                key={movie.id}
                initial={false}
                animate={{
                  translate: `${(index - position) * 1240 + 620}px`,
                  scale: 0.98,
                }}
                transition={{ type: "tween", duration: 1 }}
              >
                <Img bgPhoto={makeImagePath(movie.backdrop_path, "w500")} />
                <Description>
                  <h2>{movie.title}</h2>
                  <h3>{movie.overview}</h3>
                </Description>
              </Carousel>
            ))}
          </CarouselWrapper>
        </AnimatePresence>
      </Slide>
      <LeftBtn onClick={onLeft}>
        <BsChevronLeft />
      </LeftBtn>
      <RightBtn onClick={onRight}>
        <BsChevronRight />
      </RightBtn>
    </>
  );
}

export default MainCarousel;
