import React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';

const Items = (props) => {

  return (
    <>
      <section>{props.name}</section>
      {/* <Container>
        <Grid>
          <Card>
            <CardMedia />
            <CardContent>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </Grid>
      </Container> */}
    </>
  );
}

// passing component into connect function and giving callback to map global state to component props
const mapStateToProps = (state) => {
  return {
    item: state.items.name,
  }
}

export default connect(mapStateToProps)(Items);