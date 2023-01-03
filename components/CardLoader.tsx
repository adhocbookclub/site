import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const CardLoader = () => (
  <Grid container spacing={4}>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <Grid key={i}>
        <Card sx={{ width: 180 }}>
          <Skeleton
            sx={{ height: 270 }}
            animation="wave"
            variant="rectangular"
          />

          <CardContent>
            <Typography>
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="caption">
              <Skeleton animation="wave" width="80%" />
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Skeleton
              animation="wave"
              variant="circular"
              width={24}
              height={24}
              sx={{ margin: 1 }}
            />
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default CardLoader;
