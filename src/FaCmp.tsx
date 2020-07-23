// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import {
  Icon,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { FaList } from "./FaList";

const StyledTableContainer = styled(TableContainer)<any>`
  & th {
    font-weight: bold;
  }
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: ${(props) => ((props as any).vertical ? "column" : "row")};
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-${(props) => ((props as any).vertical ? "top" : "left")}: 2px;
  }
` as any;

export const TextIcon = (props: {
  tooltipDescription: string;
  icons: React.ReactNode;
  vertical?: boolean;
}) => {
  if  (typeof props.icons === 'string' || typeof props.icons![0] === 'string') return null;

  const { tooltipDescription } = props;

  return (
    <TableRow>
      <TableCell align={"center"}>
        <Tooltip title={tooltipDescription}>
          <IconCont vertical={props.vertical}>{props.icons}</IconCont>
        </Tooltip>
      </TableCell>
      <TableCell align={"left"}>
        <Typography>{tooltipDescription}</Typography>
      </TableCell>
    </TableRow>
  );
};

export const Section = (props: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div style={{ backgroundColor: "#ececec", padding: "8px 20px" }}>
        <Typography gutterBottom variant={"h4"} align={"center"}>
          {props.title}
        </Typography>
        {props.description && (
          <Typography align={"center"}>{props.description}</Typography>
        )}
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <StyledTableContainer component={Paper} style={{ marginBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align={"center"}>Icon</TableCell>
              <TableCell align={"left"}>Icon tooltip content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{props.children}</TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export const FaTable = () => {
  return <FaList />;
};
