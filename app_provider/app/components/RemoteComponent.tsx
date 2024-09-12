const RemoteComponent = ({ name = "John Doe" }) => {
  return (
    <div>
      <h2>Hello from Remote Component!</h2>
      <p>Your name is {name}</p>
      <button onClick={() => alert("coucou")}>click me</button>
    </div>
  );
};

export default RemoteComponent;
