pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/FGARMY/Panjara_agro.git'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
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