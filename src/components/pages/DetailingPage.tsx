import React, { Component } from "react";
import { Grid, Paper } from "@mui/material";

export default class DetailingPage extends Component {
  render() {
    return (
      <>
        <h1 className="mainPaperTitle">Detailing Packags and Services</h1>
        <h5 style={{ color: "white", fontSize: "20px", marginBottom: "80px" }}>
          *PRICE & TIME VARIES BY VEHICLE SIZE AND CONDITION*
        </h5>
        <Grid
          container
          spacing={12}
          justifyContent="center"
          direction="row"
          alignItems="center"
          className="detailGrid"
        >
          <Grid container item md={4}>
            <Paper elevation={15} className="paperClass">
              <h2 className="paperTitle">The Basic Package</h2>
              <hr />
              <h4>
                <span style={{ color: "#FFF205", fontSize: "20px" }}>
                  Price:
                </span>{" "}
                $120 to $160
              </h4>
              <h4>
                <span style={{ color: "#FFF205", fontSize: "20px" }}>
                  Time:
                </span>{" "}
                3 to 5 Hours
              </h4>
              <h4>
                <u style={{ color: "#FFF205", fontSize: "20px" }}>Details</u>
              </h4>
              <p style={{ fontSize: "17px" }}>
                The Basic Package offers a routine exterior and interior
                cleaning. This is designed for vehicles that are maintained
                regularly and are in need of a proper detailing.
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#FFF205" }}>Interior</u>: Vacuum carpets,
                seats, & floor mats, dust interior surfaces, clean interior
                surfaces and glass, and clean door jams.
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#FFF205" }}>Exterior</u>: Pre-rinse & foam
                cannon pre-wash, bug & tar removal, wheel & tire wash,
                application of tire dressing, clean exterior paint & glass,
                microfiber towel dry, and application of paint protectant (2-3
                months of protection).
              </p>
            </Paper>
          </Grid>
          <Grid container item md={3}>
            <Paper elevation={15} className="paperClass">
              <h2 className="paperTitle2">The "Griz" Special</h2>
              <hr />
              <h4>
                <span style={{ color: "#FE0000", fontSize: "20px" }}>
                  Price:
                </span>{" "}
                $150 to $190
              </h4>
              <h4>
                <span style={{ color: "#FE0000", fontSize: "20px" }}>
                  Time:
                </span>{" "}
                4 to 6 Hours
              </h4>
              <h4>
                <u style={{ color: "#FE0000", fontSize: "20px" }}>Details</u>
              </h4>
              <p style={{ fontSize: "17px" }}>
                The "Griz" Special is an excellent deal for a vehicle in need of
                thorough detail to bring back that shine and like-new feeling!
                <b style={{ color: "#FE0000" }}>
                  {" "}
                  This includes <i>The Basic Package</i>, plus the following:
                </b>
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#FE0000" }}>Interior</u>: Shampoo, spot
                removal, & deodorization of carpets, floor mats, & seats, deep clean of
                rubber floor mats, application of UV protectant to interior
                surfaces, conditioner & protectant on all leather/vinyl.
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#FE0000" }}>Exterior</u>: Decontamination of wheels &
                paint with iron remover, removal of surface contaminants with clay bar, application
                of SiO2 protectant & tire dressing on wheels, and a finishing high gloss paint sealant
                (6 months of protection).
              </p>
            </Paper>
          </Grid>
          <Grid container item md={4}>
            <Paper elevation={15} className="paperClass">
              <h2 className="paperTitle3">The Elite Package</h2>
              <hr />
              <h4>
                <span style={{ color: "#7CFF01", fontSize: "20px" }}>
                  Price:
                </span>{" "}
                Starting at $250 (please inquire for official quote)
              </h4>
              <h4>
                <span style={{ color: "#7CFF01", fontSize: "20px" }}>
                  Time:
                </span>{" "}
                6+ Hours
              </h4>
              <h4>
                <u style={{ color: "#7CFF01", fontSize: "20px" }}>Details</u>
              </h4>
              <p style={{ fontSize: "17px" }}>
                The Elite Package provides the highest quality detailing process
                from start to finish. Ceramic coatings provide the longest
                lasting protection and make maintaining your vehicle's exterior
                a breeze. The Elite Package offers the best value and investment
                into extending the life of your vehicle's condition.
                <b style={{ color: "#7CFF01" }}>
                  {" "}
                  This includes <i>The "Griz" Special</i>, plus the following:
                </b>
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#7CFF01" }}>Paint Enhancement</u>: This is
                recommended prior to application of ceramic coating and includes
                detailed paint correction, enhancement paint gloss & clarity,
                and removal of 50-70% of exterior scratches & swirl marks. We
                offer a Level One and a Level Two ceramic coating.
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#7CFF01" }}>Level One</u>: (CARPRO Gliss) -
                1 year of protection
              </p>
              <p style={{ fontSize: "17px" }}>
                <u style={{ color: "#7CFF01" }}>Level Two</u>: (CARPRO Cquartz
                UK 3.0 + Gliss) - 2+ years of protection
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          md={12}
          justifyContent="center"
          direction="row"
          alignItems="center"
          style={{ marginTop: "40px" }}
        >
          <Paper elevation={15} className="paperClass">
            <h2 className="paperTitle4">Additional Services</h2>
            <hr />
            <h4>Engine Bay Detail: $20</h4>
            <h4>Fabric Protection: $5 per seat</h4>
            <h4>Glass Polish and Water-Repellant: $30 to $50</h4>
          </Paper>
        </Grid>
      </>
    );
  }
}
