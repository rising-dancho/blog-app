import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    console.log(error, errorInfo);
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen font-bold text-2xl flex flex-col justify-center items-center">
          <h1>Something went wrong</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Try clicking the button to refresh the page</p>
          <button onClick={this.reloadPage}>Refresh</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
