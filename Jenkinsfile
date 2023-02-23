def app

pipeline {
    agent {
           docker { image 'abazuntts/node-pnpm' }
       }
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Copy NPM config') {
            steps {
               withNPM(npmrcConfig: 'npm-it-incubator') {
                  sh 'cp .npmrc ./packages/incubator-utils'
               }
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
                  sh 'pnpm release'
               }
            }
        }
    }
}
