pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/eshunemma/ps5-price-notify', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('install packages') {
      steps {
        sh 'npm install && npm start'
      }
    }

  }
}