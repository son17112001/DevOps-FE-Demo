pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
       stage('Build Image') {
            steps { 
                sh 'docker build -t reactimage .'
                sh 'docker tag reactimage:latest son/dev:latest'
            }    
       }
       stage('Deploy') {
            steps {  
                script {
                    sh 'docker run -itd --name My-first-container -p 3001:8080 son/dev:latest'
                }
            }
       }
    }
}