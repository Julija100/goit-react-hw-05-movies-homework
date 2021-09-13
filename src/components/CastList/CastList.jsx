import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import {BASE_URL_IMG } from "../../services/moviesApiConstants";
// import noPhoto from "../../images/no-photo.jpg";
import StylesCastLis from "./StylesCastList";

export default function CastList({ castData }) {
  const classes = StylesCastLis();

  return (
    <Grid
      container
      component="ul"
      spacing={2}
      className={`list ${classes.castCardList}`}
    >
      {castData.map(({ id, profile_path, name, character }) => (
        <Grid component="li" item key={id} xs={6} sm={3} md={2}>
          <Card component="div" className={classes.castCard}>
            <CardMedia
              component="img"
              className={classes.castCardImg}
              src={profile_path ? `${BASE_IMG_URL}${profile_path}` : noPhoto}
              alt={name}
            />
            <CardContent className={classes.cardCardContent}>
              <Typography
                variant="subtitle2"
                align="center"
                component="p"
                className={classes.castSubTitle}
              >
                {name}
              </Typography>
              {character && (
                <Typography variant="caption" align="center" component="p">
                  ({character})
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

CastList.propTypes = {
  castData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
