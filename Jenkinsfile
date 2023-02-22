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
                  sh 'curl -fsSL https://get.pnpm.io/install.sh | sh -'
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
