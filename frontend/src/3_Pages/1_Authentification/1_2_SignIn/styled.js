import styled from "styled-components";
import stelvio from "../../../5_Assets/PNG/stelvio_06_hairpin.png";

export const AuthBody = styled.div`
  min-height: calc(100vh - 5.395vw);
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${stelvio}) no-repeat bottom;
  background-size: cover;
  z-index: 0;
  display: flex;
  justify-content: center;
`