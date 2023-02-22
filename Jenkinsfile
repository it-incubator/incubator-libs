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
                  sh 'cp .npmrc ./packages/incubator-utils'
               }
            }
        }
        stage('Publish') {
            steps {
               withNPM(npmrcConfig: 'npm-it-incubator') {
                  sh 'pnpm install'
                  sh 'pnpm build'
                  sh 'npm run release'
               }
            }
        }
    }
}
