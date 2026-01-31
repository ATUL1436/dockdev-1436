pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "dockdev1436"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ATUL1436/dockdev-1436.git'
            }
        }

        stage('Docker Info') {
            steps {
                sh '''
                  docker --version
                  docker compose version
                '''
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh '''
                  docker compose down || true
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                  docker compose build --no-cache
                '''
            }
        }

        stage('Run Containers') {
            steps {
                sh '''
                  docker compose up -d
                '''
            }
        }

        stage('Verify Containers') {
            steps {
                sh '''
                  docker ps
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}
