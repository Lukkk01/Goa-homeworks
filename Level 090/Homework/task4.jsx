function LoggedIn() {
  const isLoggedIn = true;
  const message = isLoggedIn ? 'Hello User' : 'Please log in';
  
  return (
    <div>
      {message}
    </div>
  );
}

export default LoggedIn