def app

pipeline {
    agent {
      docker {
                  image 'node:lts-bullseye-slim'
                  args '-p 3000:3000'
              }
    }
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
                  sh 'pnpm release'
               }
            }
        }
    }
}
