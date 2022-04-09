const Sum = ({ param1 = 0, param2 = 0 }) => {
  return (
    <div>
      <h1>Sum...</h1>

      <span id="sum">{param1 + param2}</span>
    </div>
  );
};

export default Sum;
