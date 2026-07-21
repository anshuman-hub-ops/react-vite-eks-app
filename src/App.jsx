import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>🚀 React Vite CI/CD on Amazon EKS</h1>

          <p>
            This application is successfully deployed using a complete
            CI/CD Pipeline.
          </p>

          <h3>Project Technologies</h3>

          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>⚛ React + Vite</li>
            <li>🐳 Docker</li>
            <li>☁ Amazon ECR</li>
            <li>☸ Amazon EKS</li>
            <li>🔧 Jenkins Pipeline</li>
            <li>📂 GitHub Repository</li>
          </ul>

          <br /><br />

          <button className="counter">
            ✅ Deployment Successful
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <h2>CI/CD Pipeline Flow</h2>

        <p>
          GitHub → Jenkins → Docker → Amazon ECR → Amazon EKS
        </p>

        <br />

        <h3>Pipeline Status</h3>

        <p>✔ Source Code Checked Out</p>
        <p>✔ React Application Built</p>
        <p>✔ Docker Image Created</p>
        <p>✔ Docker Image Pushed to Amazon ECR</p>
        <p>✔ Kubernetes Deployment Updated</p>
        <p>✔ Application Successfully Running on Amazon EKS</p>
      </section>

      <div className="ticks"></div>

      <section id="spacer">
        <h3>Developed by</h3>

        <p><strong>Anshuman Ayush Baral</strong></p>

        <p>B.Tech Computer Science & Engineering</p>

        <p>React • Docker • Jenkins • AWS EKS • Kubernetes</p>
      </section>
    </>
  )
}

export default App