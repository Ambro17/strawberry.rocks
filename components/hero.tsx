/** @jsx jsx */
import { Heading, Grid, Box } from "@theme-ui/components";
import { jsx } from "theme-ui";

import MDXDocument from "~/content/home/hello-world.mdx";

import { CodeBox } from "./code-box";

export const Hero: React.SFC = () => {
  return (
    <Grid
      sx={{
        padding: 2,
        maxWidth: 1240,
        mx: "auto",
        gridTemplateColumns: [null, null, "7fr 10fr", "1fr 1fr"],
      }}
    >
      <Box
        sx={{
          flex: "0 0 400px",
          m: 4,
        }}
      >
        <Heading variant="hero" sx={{ fontSize: [5, 5, 5, 6] }}>
          Strawberry is a new GraphQL library for Python 3, inspired by
          dataclasses.
        </Heading>
      </Box>
      <CodeBox
        sx={{
          flex: "1 1 50%",
          fontSize: 1,
          pre: {
            border: "none",
          },
        }}
      >
        <MDXDocument />
      </CodeBox>
    </Grid>
  );
};
