import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Azal-International";
  }, []);
  return <HomePage />;
};

export default Home;
