import SE from './assets/SE.jpg';

function App() {
  return (
    <div style={styles.container}>
      <img 
        src={SE} 
        alt="Software Engineer" 
        style={styles.image}
      />
      <h1 style={styles.heading}>Welcome to My React App</h1>
      <h2 style={styles.subheading}>Learning React Step by Step</h2>
      <p style={styles.paragraph}>
        React makes building interactive UIs easy and efficient.
      </p>
     
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    height: "350px",
    borderRadius: "10px",
    marginTop: "20px",
  },
  heading: {
    color: "#01080fff",
  },
  subheading: {
    color: "#555",
  },
  paragraph: {
    fontSize: "16px",
    color: "#333",
  },
};

export default App;
