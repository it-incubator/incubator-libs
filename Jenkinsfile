def app

pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                script {
                  sh 'pnpm install'
               }
            }
        }
        stage('Build') {
            steps {
                script {
                  sh 'pnpm build'
               }
            }
        }
        stage('Preparing') {
             steps {
              withCredentials([string(credentialsId: 'NPM_ACCESS_TOKEN', variable: 'NPM_ACCESS_TOKEN')]) {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparing.sh"
                     sh "./preparing.sh $NPM_ACCESS_TOKEN"
               }
             }
        }
        stage('Npm publish') {
            steps {
                script {
                  sh 'pnpm release'
               }
            }
        }
    }
}
