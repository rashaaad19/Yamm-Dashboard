import { PageLayoutContainer } from "./Styled-Components/PageLayoutComponent";

const PageLayout = ({ pageName }) => {
  return (
    <PageLayoutContainer>
      <div>
        <h1>{pageName}</h1>
      </div>
    </PageLayoutContainer>
  );
};

export default PageLayout;
