import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../src/store/actions";
import Card from "../src/components/Card/Card";

function App(props) {
  useEffect(() => {
    props.onFetchData();
    console.log(props.data);
  }, []);

  return (
    <div className="App">
      <button className="App__btn_filter">Отобразить понравившиеся</button>

      {props.error && <p>{props.error}</p>}

      {props.data && (
        <div>
          {props.data.data.memes.map((el, index) => (
            <div key={el.id}>
              <div>{el.name}</div>
              <img src={el.url} alt="meme" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function mapStatetoProps(state) {
  return { num: state.num, data: state.data, error: state.error };
}

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) };
};

export default connect(mapStatetoProps, mapDispatchprops)(App);
