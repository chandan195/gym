import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Details.css"
function Details(props) {
  console.log(props);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const param = useParams();
  // console.log(param);

  const getData = () => {
    // const url= "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    fetch(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231/${param.user_id}"
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.data);

        setProduct(json.data);
      })
      .catch((error) => {
        console.log(`Error :${error}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
      <div>
        <h1> id :{param.user_id}</h1>
        <p>
          {" "}
          there are need single product rest Api End Point to Call api on this
          page
        </p>
      </div>
      <div className="container-fluid details">
        <div className="row">
          <div className="col-6">
            <div className="wtf">
              <h1>WTF:GYM</h1>
              <h4>Add:abc ---</h4>
            </div>
            <div className="wtf">
              <label >Description</label>
              <p>
                WTF: Military Gym has professional trainers providing cardio,
                strength, weight loss, gain, aerobics, Zumba, and personal
                training. Along with efficient weight loss fitness advice! Join
                this WTF: Military Gym to lose weight and get muscle.
              </p>
            </div>
            <div className="wtf">
              <label>Facilities</label>

            </div>
            <div>
              <h5>Why do you choose WTF?</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card_heading">
                <p>Choose Membership</p>
              </div>
              <div className="row">
                <div className="myCard1">
                  <div className="col-6 ft">
                    <div>
                      <h4>
                        Plan1
                      </h4>
                      <h3>WTF<span style={{color:"green"}}>Slip your Waist</span></h3>
                    </div>
                  </div>
                  <div className="col-6 ft">
                    <div>
                      <h6 className="price">$123</h6>
                    </div>
                  </div>
                </div>

                <div className="myCard1">
                  <div className="col-6 ft">
                    <div>
                      <h4>
                        Plan2
                      </h4>
                      <h3>WTF<span style={{color:"green"}}>Slip your Waist</span></h3>
                    </div>
                  </div>
                  <div className="col-6 ft">
                    <div>
                      <h6 className="price">$123</h6>
                    </div>
                  </div>
                </div>

                <div className="myCard1">
                  <div className="col-6 ft">
                    <div>
                      <h4>
                        Plan3
                      </h4>
                      <h3>WTF<span style={{color:"green"}}>Slip your Waist</span></h3>
                    </div>
                  </div>
                  <div className="col-6 ft">
                    <div>
                      <h6 className="price">$123</h6>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
