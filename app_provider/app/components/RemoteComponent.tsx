const RemoteComponent = ({ name = "John Doe" }) => {
  return (
    <div>
      <h2>Hello from Remote Component!</h2>
      <p>Your name is {name}</p>
    </div>
  );
};

export default RemoteComponent;
