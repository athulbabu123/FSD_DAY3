import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardApi = () => {


    var[output,setOutput]=useState([]);

    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
        .then((res) => {
            console.log(res.data);
            setOutput(res.data);
        }).
        catch((err) =>{
            console.log(err)})
    },[]);

    
  return (
    <div>
        <Typography>hello</Typography>
        <Grid container space = {2}>
            
                {output.map((val,i)=>{
                    return(
                        <Grid item xs={12} md={4} >
                        
                        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image_url}
        title={val.pokemon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.pokemon}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
                    )
                })}

            

        </Grid>
    </div>
  )
}

export default CardApi
