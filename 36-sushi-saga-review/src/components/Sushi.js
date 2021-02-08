import React from "react";

function Sushi({ sushi, onEatSushi }) {
  // local state! will go away if the component goes away
  // const [eaten, setEaten] = useState(false)

  const { id, name, img_url, price, eaten } = sushi;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => onEatSushi(id, price)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
