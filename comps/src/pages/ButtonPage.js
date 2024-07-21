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
        <Button secondary>
          <GoDatabase />
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;