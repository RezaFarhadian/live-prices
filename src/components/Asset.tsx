import { Card, CardContent, Typography } from "@mui/material";
import { AssetsState } from "../redux/features/assets/assetsSlice";
import { Unpacked } from "../utils/Unpacked";

interface AssetProps extends Unpacked<AssetsState> {}

function Asset(props: AssetProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="span">
          {props.name}
        </Typography>
        <Typography variant="h6" component="span" marginLeft={2} color={"#808080"}>
          {props.priceUsd}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Asset
