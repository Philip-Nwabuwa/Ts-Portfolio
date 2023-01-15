import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "../css/subIndex.css";

const popup = (props: {
  trigger: boolean;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;

  setTrigger: (arg0: boolean) => void;
}) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner bg-gray-900">
        <AiOutlineCloseSquare
          onClick={() => props.setTrigger(false)}
          className="close-btn text-3xl"
        />
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default popup;
