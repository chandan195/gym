import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/Home.css";
import Banner from "./Banner";

const Home = () => {
  const [data, setData] = useState([]);

  const getApi = () => {
    fetch(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);

        setData(json.data);
      })
      .catch((error) => {
        console.log(`Error :${error}`);
      });
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <Banner />
      <div className=" container-fluid   grid-container">
        <div className="row">
          <div className="col-md-6">
            <div style={{margin:"50px"}}>
            <label style={{margin:"10px"}}>Select city</label>
            <select class="form-select"  placeholder="Select city">
              <option value="noida">noida</option>
              <option value="1">Delhi</option>
              <option value="2">Grater nodia</option>
              <option value="3">Uttar Pradesh</option>
            </select>
          </div>
          </div>
          <div className="col-md-6">
            {/* <p>hi</p> */}
            {data.map((value) => {
              // console.log(value);
              return (
                <div key={value.user_id}>
                  <Link to={`/Details/${value.user_id}`}>
                    <div className="card">
                      <img src="" alt="" />
                      <div>
                        <h4>{value.gym_name}</h4>
                        <p>
                          {value.address1}/{value.address2}
                        </p>
                        <p>
                          {value.duration_text}|{value.distance_text}
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="buttonBox">
                          <p>₹{value.plan_price}for 3 Months</p>
                          <div style={{ paddingLeft: "30%" }}>
                            <button id="myBtn">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
