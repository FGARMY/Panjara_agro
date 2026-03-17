pipeline {
    agent any

    stages {

        stage('Build App (Node Container)') {
            steps {
                sh '''
                docker run --rm -v "$PWD":/app -w /app node:18 \
                sh -c "npm install && npm run build"
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --no-cache -t panjara-agro .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop panjara || true'
                sh 'docker rm panjara || true'
                sh 'docker run -d -p 3000:80 --name panjara panjara-agro'
            }
        }
    }
}