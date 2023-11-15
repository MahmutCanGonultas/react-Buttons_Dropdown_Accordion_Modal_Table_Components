import { GoBellFill, GoDownload, GoPasskeyFill } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!!");
  };

  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          className={"mb-5"}
          onClick={handleClick}
        >
          <GoBellFill />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button secondary outline onClick={handleClick}>
          <GoDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoPasskeyFill />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide adds!
        </Button>
      </div>
      <div>
        <Button danger>Batman</Button>
      </div>
      <div>
        <Button warning>Joker</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
