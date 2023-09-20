import Card from "./components/card";
import Navigation from "./components/navigation";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const api_img = "https://image.tmdb.org/t/p/w500/";
const api_url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5";

function Image({ exam, index }) {
    return (
        <Draggable key={exam.id} draggableId={exam.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                    <img
                      src={api_img + exam.poster_path}
                      alt="poster_img"
                      className="w-full h-50  mt-9   flex flex-col"
                    />
                    </div>
                  )}
                </Draggable>
    )
}

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
          setMovies(data.results.slice(0, 10));
          setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Something went wrong with fetching to 10 movies");
          console.error(error);
          setIsLoading(false);
      });
  }, []);
    
    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedImages = [...movies];
        const [reorderedImage] = updatedImages.splice(result.source.index, 1);
        updatedImages.splice(result.destination.index, 0, reorderedImage);
        setMovies(updatedImages);
    };
    if (isLoading) {
        return <p>Loading...</p>;
    }
  return (
    <main className="bg-white px-20">
      <Navigation />
      <DragDropContext>
        <Droppable droppableId="card" direction="horizontal">
          {(provided) => (
            <div
              className="card  gap-14 grid lg:grid-cols-4 md:grid-cols-2  mt-10"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {movies.map((exam, index) => (
                <Image key={exam.id} exam={exam} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
};

export default Home;
