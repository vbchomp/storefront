import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { changeItem } from '../../store/itemsReducer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const Items = (props) => {
  const itemsToShow = props.item.filter((item) => {
    return item.category === props.currentCategory;
  });

  return (
    <>
      {/* <section>
        {itemsToShow.map((item) => {
          return <h3>{item.name}</h3>;
        })}
      </section> */}
      {/* need onClick for the changeItem that will be like the changeCategory */}
      <Container>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            {itemsToShow.map((item) => {
              return (
                <Card variant="outlined">
                  <CardHeader
                    action={
                      <IconButton>
                        <DeleteOutlined />
                      </IconButton>
                    }
                    title={item.name}
                    // subheader={item.subCategory}  
                  />
                  {/* <CardMedia /> */}
                  <CardContent>
                    <div>{item.category}</div>
                    <li>{item.price}</li>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => props.changeItem(item.name) }>Order Now</Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// passing component into connect function and giving callback to map global state to component props
const mapStateToProps = (state) => {
  return {
    item: state.itemsReducer.item,
    currentCategory: state.itemsReducer.currentCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeItem: (item) => {
      dispatch(changeItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
