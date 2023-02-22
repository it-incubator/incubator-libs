def app

pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
               withNPM(npmrcConfig: 'npm-it-incubator') {
                  sh 'ls'
                  sh 'cp .npmrc ./packages/incubator-utils'
                  sh 'ls'
               }
            }
        }
        stage('Publish') {
            steps {
               withNPM(npmrcConfig: 'npm-it-incubator') {
                  sh 'npm run release'
               }
            }
        }
    }
}
