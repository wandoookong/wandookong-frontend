import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  onClick(): void;
  title: string;
  content: string;
}

export default function TeamApplyModal({ title, content, onClick }: Props) {
  return (
    <Container>
      <header>
        <CloseIcon sx={{ fontSize: 28 }} onClick={onClick} />
      </header>
      <section>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.6);
  color: #ffffff;
  z-index: 3;

  header {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
  }

  section {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;

    h1 {
      font-weight: 700;
      font-size: 20px;
    }
    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 12px;
      line-height: 138.02%;
      white-space: pre-wrap;
    }
  }
`;
