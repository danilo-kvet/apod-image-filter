import {
  ContentCardContainer,
  StyledImage,
  StyledVideo,
  Content,
} from "./style";

const MediaContainer = ({ element }) => {
  return (
    <ContentCardContainer>
      <h3>{element.title}</h3>
      <Content>
        {element.media_type === "image" ? (
          <StyledImage alt={element.title} src={element.url} />
        ) : (
          <StyledVideo src={element.url} title={element.title} />
        )}
        <h5>{element.explanation}</h5>
      </Content>
      <h5>{element.copyright || "unknown author"}</h5>
    </ContentCardContainer>
  );
};

export default MediaContainer;
