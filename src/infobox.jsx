import './infobox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function infobox({info}){
  
   let img = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return(

        <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent className='info'>
          <Typography gutterBottom variant="h5" component="div">
          <b> {info.city}</b>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           <b>Temperature:&nbsp;&nbsp;&nbsp;</b>{info.temp}*C
           <br />
           <br />
           <b>MaxTemp:&nbsp;&nbsp;&nbsp;</b>{info.maxTemp}*C
           <br />
           <br />
           <b>MinTemp:&nbsp;&nbsp;&nbsp;</b>{info.minTemp}*C
            <br />
            <br />
            <b>Feelslike:&nbsp;&nbsp;&nbsp;</b>{info.feelsLike}*C
           <br />
           <br />
           <b>Description:&nbsp;&nbsp;&nbsp;</b>{`${info.description} in ${info.city}`}
           <br />
           <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}