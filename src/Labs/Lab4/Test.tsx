import s from "./s";
import E from "./E";
import { Provider } from "react-redux";
function Test() {
  return (
    <Provider store={s}>
      <E/>
    </Provider>
  );
}
export default Test;