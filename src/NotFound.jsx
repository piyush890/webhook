import Lottie from "lottie-react";

const NotFound = () => {
    return(<Lottie
      animationData={"Error_404.json"}
      loop={true}
      autoplay={true}
      style={{ width: 300, height: 300 }}
    />);
}
export default NotFound;