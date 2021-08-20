import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
import Zoom from '@material-ui/core/Zoom'

const useStyles = (theme) => ({
  root: {
    // maxWidth: 300,
    marginBottom: theme.spacing.unit
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  icecream: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.primary.contrastText,
    border: `${Math.ceil(theme.spacing.unit/2.0)}px solid ${theme.palette.primary.dark}`
  }
});

const BasicCard = ({link, label, desc, tech, image, classes}) => {

  const chips = tech.split(',').map((t) => 
    <Chip key={t} variant="outline" size="small" label={t} className={classes.chip}/>
  )

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardActions className={classes.icecream}>
          <div>
            <Typography gutterBottom variant="headline" component="h5" color="primary" >
              {label}
            </Typography>
          </div>
          <div>
            <Button variant="raised" size="small" color="secondary" href={link} target="_blank">
              Try it!
            </Button>
          </div>
        </CardActions>
        <Zoom in timeout={800}>
          <CardMedia
          component="img"
          alt="Website Screenshot"
          height="300"
          src={image}
          title={label}
          />
        </Zoom>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
      </CardContent>
      
      <CardActions className={classes.chips}>
        { chips }
      </CardActions>
    </Card>
  );
}
export default withStyles(useStyles)(BasicCard);