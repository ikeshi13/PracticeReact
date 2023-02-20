import { CssModules } from "./CssModules";
import { Emotion } from "./Emotion";
import { InlineStyle } from "./InlineStyle";
import { StyledComponents } from "./StyledComponents";
import { StyledJsx } from "./StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
}
