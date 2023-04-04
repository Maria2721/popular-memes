import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../store/actions";
import "./Home.scss";
import Card from "../Card/Card";

function Home(props) {
  useEffect(() => {
    props.onFetchData();
  }, [props]);

  return (
    <div className="home">
      <button className="home__btn_filter">Отобразить понравившиеся</button>

      {props.error && <p className="home__error">{props.error}</p>}
      <div className="home__cardsWrapper">
        {props.data &&
          props.data.data.memes.map((el) => (
            <Card key={el.id} name={el.name} url={el.url}></Card>
          ))}
      </div>
    </div>
  );
}

function mapStatetoProps(state) {
  return { num: state.num, data: state.data, error: state.error };
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) };
};

export default connect(mapStatetoProps, mapDispatchprops)(Home);
