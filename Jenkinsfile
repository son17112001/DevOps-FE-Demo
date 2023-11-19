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
                sh 'docker container stop My-first-container || echo "this container does not exist"'
                sh 'docker tag reactimage:latest son/dev:latest'
                sh 'echo y | docker container prune '
            }    
       }
       stage('Deploy') {
            steps {  
                script {
                    sh 'docker container run -d --rm --name My-first-container -p 3001:3000 son/dev:latest'
                }
            }
       }
    }
}
