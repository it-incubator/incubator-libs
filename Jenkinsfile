def app

pipeline {
    agent {
           docker {
           image 'abazuntts/node-pnpm-16.13.2:latest'
            }
       }
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
        stage('Npm publish') {
            steps {
                script {
                  sh 'sudo chown -R 113:119 "/.npm"'
                  sh 'pnpm release'
               }
            }
        }
    }
}
