import CategoriesList from "../../components/CategoriesList";
import MealsList from "../../components/MealsList";
import { PaginationProvider } from "../../context/PaginationContext";

const Home = () => {
  return (
    <section className="flex gap-5">
      <PaginationProvider>
        <CategoriesList />
        <MealsList />
      </PaginationProvider>
    </section>
  );
};

export default Home;
