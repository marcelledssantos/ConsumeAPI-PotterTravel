
  const Home = () => {
    return (
      <>
        <h1>Home</h1>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div id="fixa">
              <h5 id="h5-carrousel">Seja bem-vindo(a) a Potter Travel</h5>
            </div>
            <div className="carousel-item active">
              <img id="img-carousel" src="./home.jpg" className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img id="img-carousel" src="./montan.jpg" className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img id="img-carousel" src="./promo.png" className="w-100" alt="..." />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </>
    );
  }
  
  export default Home;
  

