import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectAssets } from './redux/features/assets/assetsSlice';
import Asset from './components/Asset';

function App() {
  const dispatch = useAppDispatch()
  const assets = useAppSelector(selectAssets)
  let assetsLoaded = false

  useEffect(() => {
    dispatch({
      type: "FETCH_INITIAL_DATA"
    })

    dispatch({
      type: "STREAMING_PRICES"
    })

    return () => {
      assetsLoaded = true
    }
  }, [assetsLoaded])

  return (
    <Container sx={{
      mt: 5,
      textAlign: "center"
    }}>
      <Typography variant="h4" gutterBottom>
        Assets
      </Typography>

      <Container component="main" sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "space-between",
        ".MuiCard-root": {
          width: "350px"
        }
      }}>
        {
          assets.map(asset =>
            <Asset
              name={asset.name}
              id={asset.id}
              priceUsd={asset.priceUsd}
              key={asset.id}
            />
          )
        }
      </Container>
    </Container>
  );
}

export default App;
