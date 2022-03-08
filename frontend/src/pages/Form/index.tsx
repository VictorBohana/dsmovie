import "./styles.css";

function Form(){

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return(
        <div className="dsmovie-form-container">
            <img src={movie.image} alt={movie.title} className="dsmovie-movie-card-image" />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form action="" className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" id="email" className="form-control" />    
                    </div>    
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe a sua avaliação</label>    
                        <select id="score" className="form-control">
                            <option>1</option>    
                            <option>2</option>    
                            <option>3</option>    
                            <option>4</option>    
                            <option>5</option>    
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>    
                    </div>
                </form>    
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
            </div>
        </div>
    );
}

export default Form;