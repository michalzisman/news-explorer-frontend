function RequestError() {
  return (
    <div className="requestError">
      <p className="requestError__text">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </div>
  );
}

export default RequestError;
