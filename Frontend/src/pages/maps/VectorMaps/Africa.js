import React from "react";
import styled from "styled-components/macro";
import { VectorMap } from "react-jvectormap";

import { CardContent, Card as MuiCard, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { green } from "@material-ui/core/colors";

const MapContainer = styled.div`
  height: 300px;
`;

const Card = styled(MuiCard)(spacing);

function Africa() {
  const options = {
    map: "africa_mill",
    regionStyle: {
      initial: {
        fill: green[500],
      },
    },
    backgroundColor: "transparent",
    containerStyle: {
      width: "100%",
      height: "100%",
    },
    zoomOnScroll: false,
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Africa Map
        </Typography>
        <MapContainer>
          <VectorMap {...options} />
        </MapContainer>
      </CardContent>
    </Card>
  );
}

export default Africa;
