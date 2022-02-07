import React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { changeItem } from '../../store/itemsReducer';

const Items = (props) => {
  const itemsToShow = props.item.filter(item => {
    return item.category === props.currentCategory;
  })

  return (
    <>
      <section>{itemsToShow.map(item => {
        return <h3>{item.name}</h3>
      })}</section>
      {/* need onClick for the changeItem that will be like the changeCategory */}
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
    item: state.itemsReducer.item,
    currentCategory: state.itemsReducer.currentCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeItem: (item) => {
      dispatch(changeItem(item))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Items);