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

    stage('Smoke Test') {
      steps {
          withCredentials([string(credentialsId: 'payroll_backend_staging_url', variable: 'payroll_backend_staging_url')]) {
              sh 'apt-get update'
              sh 'apt-get install jq -y'
              sh 'chmod +x ./scripts/smoke.sh'
              // sh "PAYROLL_BACKEND_URL=$payroll_backend_staging_url ./scripts/smoke.sh"
              sh './scripts/smoke.sh'
          }
      }
  }

  }
}