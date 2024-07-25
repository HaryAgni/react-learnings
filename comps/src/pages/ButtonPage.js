import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className="mb-5" primary rounded>
          <GoBell />
          Click!
        </Button>
      </div>
      <div>
        <Button className="mb-5" secondary>
          <GoDatabase />
          Buy
        </Button>
      </div>
      <div>
        <Button className="mb-5" warning>
          <GoDatabase />
          Buy
        </Button>
      </div>
      <div>
        <Button className="mb-5" success>
          <GoDatabase />
          Buy
        </Button>
      </div>
      <div>
        <Button className="mb-5" danger>
          <GoDatabase />
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;